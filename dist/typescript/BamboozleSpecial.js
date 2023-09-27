"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bamboozle_1 = __importDefault(require("./Bamboozle"));
const Obfuscate_1 = __importDefault(require("./strategies/Obfuscate"));
const Reveal_1 = __importDefault(require("./strategies/Reveal"));
class BamboozleSpecial extends Bamboozle_1.default {
    // obfuscation loops
    obfuscateOneBitAndShuffleForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate_1.default.oneBitAndShuffleForever, duration, delay, speed);
    }
    obfuscateLeftToRightForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate_1.default.leftToRightForever, duration, delay, speed);
    }
    obfuscateRightToLeftForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate_1.default.rightToLeftForever, duration, delay, speed);
    }
    obfuscateInsideToOutsideForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate_1.default.insideToOutsideForever, duration, delay, speed);
    }
    obfuscateOutsideToInsideForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate_1.default.outsideToInsideForever, duration, delay, speed);
    }
    // obfuscation done-when-fully-obfuscated loops
    obfuscateOneBitAndShuffleUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate_1.default.oneBitAndShuffleUntilDone, delay, speed);
    }
    obfuscateLeftToRightUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate_1.default.leftToRightUntilDone, delay, speed);
    }
    obfuscateRightToLeftUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate_1.default.rightToLeftUntilDone, delay, speed);
    }
    obfuscateInsideToOutsideUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate_1.default.insideToOutsideUntilDone, delay, speed);
    }
    obfuscateOutsideToInsideUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate_1.default.outsideToInsideUntilDone, delay, speed);
    }
    // reveals (all are done-when-fully-revealed loops
    revealOneBitAndShuffleUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Reveal_1.default.oneBitAndShuffleUntilDone, delay, speed);
    }
    revealLeftToRight(delay, speed) {
        this.taskRunner.addSingleRun(Reveal_1.default.leftToRight, delay, speed);
    }
    revealRightToLeft(delay, speed) {
        this.taskRunner.addSingleRun(Reveal_1.default.rightToLeft, delay, speed);
    }
    revealInsideToOutside(delay, speed) {
        this.taskRunner.addSingleRun(Reveal_1.default.insideToOutside, delay, speed);
    }
    revealOutsideToInside(delay, speed) {
        this.taskRunner.addSingleRun(Reveal_1.default.outsideToInside, delay, speed);
    }
}
exports.default = BamboozleSpecial;
