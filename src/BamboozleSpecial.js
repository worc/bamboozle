import Bamboozle from './Bamboozle';
import Obfuscate from "./strategies/Obfuscate";
import Reveal from "./strategies/Reveal";

export default class BamboozleSpecial extends Bamboozle {
    // obfuscation loops
    obfuscateOneBitAndShuffleForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate.oneBitAndShuffleForever, duration, delay, speed);
    }

    obfuscateLeftToRightForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate.leftToRightForever, duration, delay, speed);
    }

    obfuscateRightToLeftForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate.rightToLeftForever, duration, delay, speed);
    }

    obfuscateInsideToOutsideForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate.insideToOutsideForever, duration, delay, speed);
    }

    obfuscateOutsideToInsideForever(duration, delay, speed) {
        this.taskRunner.addLoop(Obfuscate.outsideToInsideForever, duration, delay, speed);
    }

    // obfuscation done-when-fully-obfuscated loops
    obfuscateOneBitAndShuffleUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate.oneBitAndShuffleUntilDone, delay, speed);
    }

    obfuscateLeftToRightUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate.leftToRightUntilDone, delay, speed);
    }

    obfuscateRightToLeftUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate.rightToLeftUntilDone, delay, speed);
    }

    obfuscateInsideToOutsideUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate.insideToOutsideUntilDone, delay, speed);
    }

    obfuscateOutsideToInsideUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Obfuscate.outsideToInsideUntilDone, delay, speed);
    }

    // reveals (all are done-when-fully-revealed loops
    revealOneBitAndShuffleUntilDone(delay, speed) {
        this.taskRunner.addSingleRun(Reveal.oneBitAndShuffleUntilDone, delay, speed);
    }

    revealLeftToRight(delay, speed) {
        this.taskRunner.addSingleRun(Reveal.leftToRight, delay, speed);
    }

    revealRightToLeft(delay, speed) {
        this.taskRunner.addSingleRun(Reveal.rightToLeft, delay, speed);
    }

    revealInsideToOutside(delay, speed) {
        this.taskRunner.addSingleRun(Reveal.insideToOutside, delay, speed);
    }

    revealOutsideToInside(delay, speed) {
        this.taskRunner.addSingleRun(Reveal.outsideToInside, delay, speed);
    }

    // specials
    // inversionWave(duration, delay, speed, width) {
    //     this.taskRunner.addLoop(Special.inversionWave, duration, delay, speed);
    // }
}