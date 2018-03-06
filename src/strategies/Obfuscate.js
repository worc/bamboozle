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
 * functions with loops that end use a return and are suffixed with UntilDone, functions with
 * loops that continue yielding after the bitmap is full up are suffixed with Forever.
 */
export default class Obfuscate {
    static* oneBitAndShuffleUntilDone(bitmap) {
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

    static* oneBitAndShuffleForever(bitmap) {
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

    static* leftToRightUntilDone(bitmap) {
        let result = bitmap.concat([]);

        for (let i = 0; i < result.length; i++) {
            result[i] = 1;

            if (result.includes(0)) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* leftToRightForever(bitmap) {
        let result = bitmap.concat([]);

        for (let i = 0; i < result.length; i++) {
            result[i] = 1;

            yield result;
        }
    }

    static* rightToLeftUntilDone(bitmap) {
        let result = bitmap.concat([]);

        for (let i = result.length - 1; i > - 1; i--) {
            result[i] = 1;

            if(result.includes(0)) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* rightToLeftForever(bitmap) {
        let result = bitmap.concat([]);

        for (let i = result.length - 1; i > - 1; i--) {
            result[i] = 1;
            yield result;
        }

        while(result) {
            yield result;
        }
    }

    static* insideToOutsideUntilDone(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);
        let centerLeftIndex = centerIndex - 1;

        if (result.length % 2 === 0) {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 1;
                result[centerIndex + i] = 1;

                result[centerLeftIndex] = 1;
                result[centerLeftIndex - i] = 1;

                if(result.includes(0)) {
                    yield result;
                } else {
                    return result;
                }

            }

        } else {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 1;
                result[centerIndex + i] = 1;
                result[centerIndex - i] = 1;

                if(result.includes(0)) {
                    yield result;
                } else {
                    return result;
                }
            }
        }
    }

    static* insideToOutsideForever(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);
        let centerLeftIndex = centerIndex - 1;

        if (result.length % 2 === 0) {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 1;
                result[centerIndex + i] = 1;

                result[centerLeftIndex] = 1;
                result[centerLeftIndex - i] = 1;

                yield result;

            }
        } else {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 1;
                result[centerIndex + i] = 1;
                result[centerIndex - i] = 1;

                yield result;
            }
        }

        while(bitmap) {
            yield result;
        }
    }

    static* outsideToInsideForever(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);

        for(let i = 0; i <= centerIndex; i++) {
            result[i] = 1;
            result[result.length - 1 - i] = 1;

            yield result;
        }

        while(bitmap) {
            yield bitmap;
        }
    }

    static* outsideToInsideUntilDone(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);

        for(let i = 0; i <= centerIndex; i++) {
            result[i] = 1;
            result[result.length - 1 - i] = 1;

            if(result.includes(0)) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* all(bitmap = []) {
        return bitmap.fill(1);
    }
}
