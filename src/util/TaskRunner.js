export default class TaskRunner {
    constructor(bitmap, frequency, listener = () => {}) {
        this.bitmap = bitmap;
        this.frequency = frequency;
        this.listener = listener;
        this.queue = [];
        this.stopped = true;
        this.activeTask = {};
        this.handbrakes = [];

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
            this.stopped = false;
            this.activeTask = this.queue.shift();

            this.run(this.activeTask).then(() => {
                if(this.queue.length > 0) {
                    console.log('have tasks, running');
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

        return new Promise((resolve) => {
            let stopped = false;
            this.handbrakes.push(() => {
                debugger;
                stopped = true;
            });

            if(duration) {
                // todo test
                setTimeout(resolve, duration);
            }

            setTimeout(async () => {
                let value = [];
                let done = false;

                while(!done && !stopped) {
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
        // pull the handbrake on any active loops, and update the stopped flag
        this.handbrakes.forEach((brake) => {
            brake();
        });
        this.stopped = true;

        // clear out state, as opposed to a potential pause() function which would
        // leave this state ready to restart
        this.activeTask = {};
        this.queue = [];
        this.handbrakes = [];

        // just no, this can cause infinite recursion if you try to call
        // stop from the listener (which would probably be a decent use-case)
        // this.updateListener();

        return this;
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
