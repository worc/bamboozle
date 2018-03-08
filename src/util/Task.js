export default class Task {
    constructor(options) {
        console.log('constructor delay', options.delay);
        let { generator, duration, delay, listener } = options;
        this.props = { generator, duration, delay, listener};
        this.stopped = false;
        this.frequency = options.frequency;
        console.log('options frequency', options.frequency);
        console.log('constructor period', this.period);
    }

    set frequency(frequency) {
        this.period = (1 / frequency) * 1000;
    }

    run() {
        let { generator, duration, delay, listener } = this.props;
        console.log('delay pre-check', delay);
        delay = (delay) ? delay : 0;

        this.task = new Promise( resolve => {
            this.handbrake = resolve;
            console.log('duration', duration);
            console.log('delay', delay);
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
            console.log('period', this.period);
            ({ value, done } = await this.step(generator, this.period));
            listener({ value, done });
            console.log('done', done);
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
            console.log('stopping');
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
