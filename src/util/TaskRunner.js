import Task from './Task';

export default class TaskRunner {
    constructor(bitmap, frequency, listener = () => {}) {
        this.bitmap = bitmap;
        this.frequency = frequency;
        this.listener = listener;
        this.queue = [];
        this.stopped = true;
        this.activeTask = {};

        this.update({ value: this.bitmap.array });
    }

    add(strategyGenerator, duration = 0, delay = 0, frequency) {
        this.queue.push(new Task({
            generator: strategyGenerator(this.bitmap),
            listener: this.update.bind(this),
            duration,
            delay,
            frequency
        }));

        this.play();
    }

    addLoop(strategyGenerator, duration, delay, frequency) {
        this.add(strategyGenerator, duration, delay, frequency);
        return this;
    }

    addSingleRun(strategyGenerator, delay, frequency) {
        this.add(strategyGenerator, false, delay, frequency);
        return this;
    }

    play() {
        if(this.stopped && this.queue.length > 0) {
            this.activeTask = this.queue.shift();
            this.activeTask.run().then(this.play.bind(this));
        }
        console.log('no tasks left');
    }

    stop() {
        this.activeTask = {};
        this.stopped = true;
        // this.queue = []? wipe out queue on stop?

        // just no, this can cause infinite recursion if you try to call
        // stop from the listener (which would probably be a decent use-case)
        // this.updateListener();
    }

    update({ value }) {
        if(value) {
            this.bitmap.setBitmap(value);
        }

        this.listener({
            message: this.bitmap.render(),
            activeTask: this.activeTask,
            queue: this.queue,
            frequency: this.frequency
        });
    }
}
