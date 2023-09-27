"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(options) {
        let { displayName, generator, duration, delay, listener } = options;
        this.props = { displayName, generator, duration, delay, listener };
        this.stopped = false;
        this.frequency = options.frequency;
    }
    set frequency(frequency) {
        this.period = (1 / frequency) * 1000;
    }
    run() {
        let { generator, duration, delay, listener } = this.props;
        let promises = [];
        delay = (delay) ? delay : 0;
        if (duration) {
            promises.push(new Promise(resolve => {
                this.durationResolve = resolve;
                this.durationTimeout = setTimeout(() => {
                    this.stop().then(resolve);
                }, duration);
            }));
        }
        promises.push(new Promise(resolve => {
            this.delayResolve = resolve;
            this.delayTimeout = setTimeout(() => {
                this.start(generator, listener).then(resolve);
            }, delay);
        }));
        return Promise.race(promises).then(this.stop.bind(this));
    }
    async start(generator, listener) {
        let value = [];
        let done = false;
        while (!this.stopped && !done) {
            ({ value, done } = await this.step(generator));
            listener({ value });
        }
    }
    step(generator) {
        return new Promise(resolve => {
            const { value, done } = generator.next();
            setTimeout(() => { resolve({ value, done }); }, this.period);
        });
    }
    stop() {
        return new Promise(resolve => {
            // switch the flag that the delay's internal loop is
            // looking to break on, this closes the loop which
            // can get orphaned when the enclosing promise resolves
            this.stopped = true;
            // clear any outstanding timeouts, as in either the task
            // inside the delay is done and the duration is still around,
            // or the duration is done and the task inside the delay
            // is still spinning
            clearTimeout(this.durationTimeout);
            clearTimeout(this.delayTimeout);
            // force unresolved promises to resolve
            // values are passed to the listener in a side-effect way
            // so we don't have to pass any values here to the resolve
            if (this.durationResolve) {
                this.durationResolve();
            }
            if (this.delayResolve) {
                this.delayResolve();
            }
            resolve();
        });
    }
}
exports.default = Task;
