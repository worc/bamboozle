export default class Task {
    constructor(options) {
        let { generator, duration, delay, listener } = options;
        this.props = { generator, duration, delay, listener};
        this.stopped = false;
        this.frequency = options.frequency;
    }

    set frequency(frequency) {
        this.period = (1 / frequency) * 1000;
    }

    run() {
        let { generator, duration, delay, listener } = this.props;
        delay = (delay) ? delay : 0;

        this.task = new Promise( resolve => {
            this.handbrake = resolve;
            if(duration) {
                setTimeout(() => {
                    this.stop();
                }, duration);
            }

            this.delayTimeout = setTimeout(() => {
                // todo catch errors?
                this.start(generator, listener).then(this.stop.bind(this));
            }, delay);
        });

        return this.task;
    }

    async start(generator, listener) {
        let value = [];
        let done = false;

        while(!this.stopped && !done) {
            ({ value, done } = await this.step(generator, this.period));
            listener({ value });
        }
    }

    step(generator, period) {
        return new Promise( resolve => {
            const { value, done } = generator.next();
            setTimeout(() => { resolve({ value, done })}, period);
        });
    }

    stop() {
        // remove the inner delay task, doesn't work in node,
        // the promise within the delayTimeout holds the event loop open
        clearTimeout(this.delayTimeout);

        return new Promise( resolve => {
            // resolve stop only after the task is shut down
            this.task.then(resolve);

            // switch the flag that the delay's internal loop is
            // looking for to break on, this closes the loop which
            // can get orphaned when the enclosing promise resolves
            this.stopped = true;

            // call the task's resolve function and force it to stop
            this.handbrake();
        });
    }
}
