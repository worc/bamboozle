import Bitmap from './util/Bitmap';
import TaskRunner from './util/TaskRunner';
import Obfuscate from './strategies/Obfuscate';
import Reveal from './strategies/Reveal';

export default class Bamboozle {
    constructor(
        listener = (message) => { console.warn('no listener given for message:', message) },
        resolution = '',
        {
            characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
            exclude = ' ',
            startBaffled = true,
            // todo change speed to "frequency" or "pace"?
            speed = 50,
        } = {}
    ) {
        this.options = {
            characters,
            exclude,
            startBaffled,
            speed
        };
        this.bitmap = new Bitmap(resolution, this.options.exclude, this.options.characters);
        this.bitmap.fill((this.options.startBaffled) ? 1 : 0);
        this.taskRunner = new TaskRunner(this.bitmap, this.options, listener);

        this.obfuscationStrategy = Obfuscate.oneBitAndShuffleForever;
        this.revealStrategy = Reveal.oneBitAndShuffleUntilDone;
    }

    once() {
        this.taskRunner.add(Obfuscate.all)
    }

    start() {
        this.taskRunner.addLoop(this.obfuscationStrategy);
    }

    stop() {
        this.taskRunner.stop();
    }

    set(options) {
        this.options = { ...this.options, ...options };
        this.bitmap.setOptions({
            exclude: this.options.exclude,
            characters: this.options.characters
        });
    }

    text(fn = () => {}) {

    }

    reveal(duration = 0, delay) {
        // calculate the speed needed to complete a full reveal on time
        let speed = (this.bitmap.resolution.length > 0 && duration > 0) ? duration / this.bitmap.resolution.length : this.options.speed;

        // todo, definitely change the term to "pace" or something because that inequality check looks
        // todo, and sounds backwards when you read it out loud...
        // todo change speed to tempo and invert (1/tempo) at a deeper the term so that it reads better at this higher level
        // let clampedSpeed = (speed > this.options.speed) ? this.options.speed : speed;

        // duration sent to task runner is 0 or falsy so that no matter what the reveal
        // will complete, either at a pace set to match the requested duration or
        // at the default speed in options
        this.taskRunner.addSingleRun(this.revealStrategy, delay, speed);
    }
}
