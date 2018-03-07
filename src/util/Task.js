export default class Task {
    constructor(options) {
        let { generator, duration, delay, listener } = options;
        this.props = { generator, duration, delay, listener};
        this.done = false;
        this.handbrake = false;
        this.frequency = options.frequency;
        console.log('options frequency', options.frequency);
        console.log('constructor period', this.period);
    }

    set frequency(frequency) {
        this.period = (1 / frequency) * 1000;
    }

    run() {
        let { generator, duration, delay, listener } = this.props;
        delay = (delay) ? delay : 0;

        this.task = new Promise( resolve => {
            console.log('duration', duration);
            if(duration) {
                setTimeout(() => {
                    this.stop().then(resolve);
                }, duration);
            }

            setTimeout(async () => {
                let value = [];
                let done = false;

                while(!this.done && !this.handbrake) {
                    console.log('period', this.period);
                    ({ value, done } = await this.step(generator, this.period));
                    listener({ value, done });
                    console.log('done', done);
                    this.done = done;
                }

                console.log('resolving?');
                resolve();

            }, delay);
        });

        return this.task;
    }

    step(generator, period) {
        return new Promise( resolve => {
            const { value, done } = generator.next();
            setTimeout(() => { resolve({ value, done })}, period);
        });
    }

    stop() {
        return new Promise( resolve => {
            this.task.then(resolve);
            this.handbrake = true;
        });
    }
}
