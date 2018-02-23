export default class TaskRunner {
    constructor(bitmap = [], options = {}, listener = () => {}) {
        this.bitmap = bitmap;
        this.options = { ...options };
        this.listener = listener;
        this.queue = [];
        this.running = false;
        this.interval = () => {};
    }

    add(strategyGenerator, duration = 0, delay = 0, speed = this.options.speed) {
        this.queue.push({ strategyGenerator, duration, delay, speed });

        if(!this.running) {
            this.run(this.queue.shift());
        }
    }

    addLoop(strategyGenerator, duration, delay, speed) {
        this.add(strategyGenerator, duration, delay, speed);
    }

    addSingleRun(strategyGenerator, delay, speed) {
        this.add(strategyGenerator, false, delay, speed);
    }

    run({ strategyGenerator, duration, delay, speed }) {
        this.running = true;
        clearInterval(this.interval);

        setTimeout(() => {
            this.strategy = strategyGenerator(this.bitmap);
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
        this.queue = [];
        // that doesn't wipe out the queue
    }
}
