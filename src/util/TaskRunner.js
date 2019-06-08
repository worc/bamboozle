import Task from './Task';

export default class TaskRunner {
    constructor(bitmap, frequency, listener = () => {}) {
        this.bitmap = bitmap;
        this.frequency = frequency;
        this.listener = listener;
        this.queue = [];
        this.running = false;
        this.activeTask = {};

        this.update({ value: this.bitmap.array });
    }

    setFrequency(frequency) {
        this.frequency = frequency;
        this.activeTask.frequency = frequency;
        // this.queue.forEach(task => { task.frequency = frequency; } );
    }

    add(strategyGenerator, duration = 0, delay = 0, frequency = this.frequency, bits = 1) {
        this.queue.push(new Task({
            displayName: strategyGenerator.displayName,
            generator: strategyGenerator(this.bitmap, bits),
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

    addSingleRun(strategyGenerator, delay, frequency, bits) {
        this.add(strategyGenerator, false, delay, frequency, bits);
        return this;
    }

    play() {
        if(!this.running && this.queue.length > 0) {
            this.running = true;
            this.activeTask = this.queue.shift();
            this.activeTask.run().then(this.play.bind(this));
        }
    }

    stop() {
        if(this.activeTask.stop) {
            this.activeTask.stop().then(() => {
                this.activeTask = {};
                this.running = false;
            });

        }
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
