import shuffle from '../util/Shuffle';

/**
 * when obfuscating we have a couple of options when the bitmap is
 * full up with ones. we can either stop and return the last bitmap,
 * or we can loop forever.
 *
 * looping forever let's the next function down the line treat all generators
 * as potential infinite loops. it's a generalization or simplification that
 * cuts down on decision making in the bitmap consumer.
 *
 * loops that and and return are suffixed with UntilDone, loops that continue yielding
 * after the bitmap is full up are suffixed with Forever.
 */
export default class Obfuscate {
    static* oneBitAndShuffleUntilDone(bitmap = []) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => {
            if(bit) {
                obfuscated++;
            } else {
                revealed++;
            }
        });

        while(bitmap) {
            // step
            obfuscated++;
            revealed--;

            // guard
            obfuscated = (obfuscated > bitmap.length) ? bitmap.length : obfuscated;
            revealed = (revealed < 0) ? 0 : revealed;

            // resolve
            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

            // yield/return
            if(result.includes(0)) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* oneBitAndShuffleForever(bitmap = []) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => {
            if(bit) {
                obfuscated++;
            } else {
                revealed++;
            }
        });

        while(bitmap) {
            // step
            obfuscated++;
            revealed--;

            // guard
            obfuscated = (obfuscated > bitmap.length) ? bitmap.length : obfuscated;
            revealed = (revealed < 0) ? 0 : revealed;

            // resolve
            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

            // yield
            yield result;
        }
    }

    static* leftToRightUntilDone(bitmap = []) {
        for (let i = 0; i < bitmap.length; i++) {
            bitmap[i] = 1;

            if (bitmap.includes(0)) {
                yield bitmap;
            } else {
                return bitmap;
            }
        }
    }

    static* leftToRightForever(bitmap = []) {
        for (let i = 0; i < bitmap.length; i++) {
            bitmap[i] = 1;

            yield bitmap;
        }
    }
}