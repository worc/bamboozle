export default class TaskRunner {
    constructor(bitmap, frequency, listener = () => {}) {
        this.bitmap = bitmap;
        this.frequency = frequency;
        this.listener = listener;
        this.queue = [];
        this.stopped = true;
        this.activeTask = {};

        this.updateListener();
    }

    add(strategyGenerator, duration = 0, delay = 0, frequency) {
        this.queue.push({ strategyGenerator, duration, delay, frequency });
        this.play();
    }

    addLoop(strategyGenerator, duration, delay, frequency) {
        this.add(strategyGenerator, duration, delay, frequency);
    }

    addSingleRun(strategyGenerator, delay, frequency) {
        this.add(strategyGenerator, false, delay, frequency);
    }

    play() {
        console.log('stopped?', this.stopped);
        if(this.stopped) {
            this.activeTask = this.queue.shift();

            this.run(this.activeTask).then(() => {
                if(this.queue.length > 0) {
                    this.activeTask = this.queue.shift();
                    this.run(this.activeTask);
                } else {
                    console.log('out of tasks, stopping');
                    this.stop();
                }
            });
        }
    }

    run({ strategyGenerator, duration, delay, frequency }) {
        delay = (delay) ? delay : 0;
        let generator = strategyGenerator(this.bitmap);

        this.stopped = false;

        return new Promise((resolve) => {
            if(duration) {
                // todo test
                setTimeout(resolve, duration);
            }

            setTimeout(async () => {
                let value = [];
                let done = false;

                while(!done && !this.stopped) {
                    let period  = (frequency) ? (1 / frequency) * 1000 : (1 / this.frequency) * 1000;
                    ({ value, done } = await this.step(generator, period));

                    if(value) {
                        this.bitmap.setBitmap(value);
                    }

                    this.updateListener();
                }

                resolve();

            }, delay);
        });
    }

    step(generator, period) {
        return new Promise(resolve => {
            const { value, done } = generator.next();
            setTimeout(() => { resolve({ value, done }) }, period);
        });
    }

    stop() {
        this.activeTask = {};
        this.stopped = true;
        // this.queue = []? wipe out queue on stop?

        // just no, this can cause infinite recursion if you try to call
        // stop from the listener (which would probably be a decent use-case)
        // this.updateListener();
    }

    updateListener() {
        this.listener({
            message: this.bitmap.render(),
            activeTask: this.activeTask,
            queue: this.queue,
            frequency: this.frequency
        });
    }
}
