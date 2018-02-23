import shuffle from '../util/Shuffle';
import Bitmap from '../util/Bitmap';

/**
 * all of the static generators take an array of zero or more length as an argument
 * and will yield or return an array of the same length
 *
 * the bitmap corresponds with a string of the same length, handled elsewhere, where
 * zeroes and ones indicate revealed and obfuscated characters
 *
 * a return statement is used when the bitmap is fully revealed in order to
 * end the generator *and* yield a defined value to the caller.
 *
 * you see, the MDN generator function example had a yield as the last line in a generator,
 * but that leads to ambiguity where you have to call the generator one more time
 * than necessary, then immediately recall the previous value. otherwise you're stuck
 * with the final yield which gives you { done: true, value: undefined } -_-
 *
 * on the other hand, a return statement in a generator will give you something
 * much more useful: { done: true, value: <a value!> } ^_^
 *
 * so given that, yields are used while looping and returns are used when finalizing
 */
export default class Reveal {
    static* oneBitAndShuffleUntilDone(bitmap = []) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        // first count up our ones/obfuscated and zeroes/revealed to initialize
        bitmap.forEach(bit => {
            // coercing a truthy here, which i guess leaves open the possibility
            // of non-binary bits if you want to get real creative down the line
            if (bit) {
                obfuscated++;
            } else {
                revealed++;
            }
        });

        // so long as we have an array to work with, stay in this loop
        while (bitmap) {
            obfuscated--;
            revealed++;

            // not the best guard statements, but i'm already upside down with
            // decrementing at the beginning of the loop... oh well...
            obfuscated = (obfuscated < 0) ? 0 : obfuscated;
            revealed = (revealed > bitmap.length) ? bitmap.length : revealed;

            // a bit terse and ugly, but just building a new bitmap based on
            // our current count of obfuscated and revealed (obfuscation assumed as ones here)
            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

            // finally, only return and indicate that we're done draining the ones
            // if that's actually true :P
            if (obfuscated > 0) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* leftToRight(bitmap = Bitmap) {
        // cloning the array since native class extensions don't
        // work right now, i'm sure this is cleaner in babel 7
        let result = bitmap.concat([]);

        for (let i = 0; i < result.length; i++) {
            result[i] = 0;

            if (bitmap.includes(1)) {
                yield result;
            } else {
                return result;
            }
        }

        // zero-length fallthrough:
        return result;
    }

    // todo remove .array access after updating to babel 7
    static* rightToLeft(bitmap = []) {
        // cloning the array since native class extensions don't
        // work right now, i'm sure this is cleaner in babel 7
        let result = bitmap.concat([]);

        for(let i = result.length - 1; i > - 1; i--) {
            result[i] = 0;
            if(result.includes(1)) {
                yield result;
            } else {
                return result;
            }
        }
    }

    static* insideToOutside(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);
        let centerLeftIndex = centerIndex - 1;

        if (result.length % 2 === 0) {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 0;
                result[centerIndex + i] = 0;

                result[centerLeftIndex] = 0;
                result[centerLeftIndex - i] = 0;

                if(result.includes(1)) {
                    yield result;
                } else {
                    return result;
                }

            }

        } else {
            for(let i = 0; i <= centerIndex; i++) {
                result[centerIndex] = 0;
                result[centerIndex + i] = 0;
                result[centerIndex - i] = 0;

                if(result.includes(1)) {
                    yield result;
                } else {
                    return result;
                }
            }
        }
    }

    static* outsideToInside(bitmap) {
        let result = bitmap.concat([]);
        let centerIndex = Math.floor(result.length / 2);

        for(let i = 0; i <= centerIndex; i++) {
            result[i] = 0;
            result[result.length - 1 - i] = 0;

            if(result.includes(1)) {
                yield result;
            } else {
                return result;
            }
        }
    }
}

