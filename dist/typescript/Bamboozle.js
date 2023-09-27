"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bitmap_1 = __importDefault(require("./util/Bitmap"));
const TaskRunner_1 = __importDefault(require("./util/TaskRunner"));
const Obfuscate_1 = __importDefault(require("./strategies/Obfuscate"));
const Reveal_1 = __importDefault(require("./strategies/Reveal"));
class Bamboozle {
    constructor(listener = (message) => { console.warn('no listener given for message:', message); }, resolution = '', { characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?', exclude = ' ', startBaffled = true, frequency = 20, } = {}) {
        this.options = {
            characters,
            exclude,
            startBaffled,
            frequency
        };
        this.bitmap = new Bitmap_1.default(resolution, this.options.exclude, this.options.characters);
        this.bitmap.fill((this.options.startBaffled) ? 1 : 0);
        this.taskRunner = new TaskRunner_1.default(this.bitmap, this.options.frequency, listener);
        this.obfuscationStrategy = Obfuscate_1.default.oneBitAndShuffleForever;
        // just filthy, shameful, but between manglers and JS being what it is,
        // idk how else to grab the class name for debugging/demo purposes
        // todo bury this dirty hack in a setter?
        this.obfuscationStrategy.displayName = Obfuscate_1.default.getClassName() + this.obfuscationStrategy.name[0].toUpperCase() + this.obfuscationStrategy.name.slice(1); // oof
        this.revealStrategy = Reveal_1.default.nBitsAndShuffleUntilDone;
        // todo bury this dirty hack in a setter
        this.revealStrategy.displayName = Reveal_1.default.getClassName() + this.revealStrategy.name[0].toUpperCase() + this.revealStrategy.name.slice(1);
    }
    once() {
        this.taskRunner.addSingleRun(Obfuscate_1.default.all);
    }
    start() {
        this.taskRunner.addLoop(this.obfuscationStrategy);
    }
    stop() {
        this.taskRunner.stop();
    }
    set(options) {
        this.options = { ...this.options, ...options };
        this.taskRunner.setFrequency(this.options.frequency);
        this.bitmap.setOptions({
            exclude: this.options.exclude,
            characters: this.options.characters
        });
    }
    text(fn = () => { }) {
    }
    reveal(duration = 0, delay = 0) {
        setTimeout(() => {
            this.stop();
            // calculate the frequency of updates needed to complete a full reveal on time
            // let frequency = (this.bitmap.resolution.length > 0 && duration > 0) ? 1000 / (duration / this.bitmap.resolution.length) : this.options.frequency;
            // flip frequency to a period
            let period = (1 / this.options.frequency) * 1000;
            // calculate the number of steps available at current frequency and duration
            // zero here being a falsy and meaning indefinite or infinite
            let steps = (duration > 0) ? duration / period : 0;
            // with n number of steps available calculate how many bits one should flip
            // given the length of the resolution and assuming its fully obfuscated
            // also if it rounds to zero, just use 1 bit and call it a day
            let bits = Math.max(Math.round(this.bitmap.resolution.length / steps), 1);
            // duration sent to task runner is 0 or falsy so that no matter what the reveal
            // will complete, either at a pace set to match the requested duration or
            // at the default speed in options
            this.taskRunner.addSingleRun(this.revealStrategy, 0, this.options.frequency, bits);
        }, delay);
    }
}
exports.default = Bamboozle;
