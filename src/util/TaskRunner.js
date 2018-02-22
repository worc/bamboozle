export default class TaskRunner {
    constructor(bitmap = [], options = {}, listener = () => {}) {
        this.bitmap = bitmap;
        this.options = { ...options };
        this.listener = listener;
        this.queue = [];
        this.running = false;
        this.interval = () => {};
    }

    add(strategy, speed = this.options.speed, duration, delay) {
        this.queue.push({ strategy, speed, duration, delay });

        if(!this.running) {
            this.run(this.queue.shift());
        }
    }

    run({ speed, strategy, duration, delay = 0 }) {
        this.running = true;
        clearInterval(this.interval);

        setTimeout(() => {
            this.strategy = strategy(this.bitmap);
            this.interval = setInterval(this.step.bind(this), speed);

            if(duration) {
                setTimeout(() =>  {
                    clearInterval(this.interval);
                    if(this.queue.length > 0) {
                        this.run(this.queue.shift());
                    } else {
                        this.running = false;
                    }
                }, duration)
            }


        }, delay);
    }

    step() {
        const { value: bitmap, done } = this.strategy.next();

        if(done) {
            this.stop();
        }

        if(bitmap) {
            this.bitmap.setBitmap(bitmap);
        }

        this.listener(this.bitmap.render());
    }

    stop() {
        clearInterval(this.interval);
        this.running = false;
        // this.queue = [] ? which would imply a pause function
        // that doesn't wipe out the queue
    }
}
