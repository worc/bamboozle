import shuffle from '../util/Shuffle';

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
  static *oneBitAndShuffleUntilDone(bitmap = []) {
    let result = [];
    let revealed = 0;
    let obfuscated = 0;

    // first count up our ones/obfuscated and zeroes/revealed to initialize
    bitmap.forEach(bit => {
      // coercing a truthy here, which i guess leaves open the possibility
      // of non-binary bits if you want to get real creative down the line
      if(bit) {
        obfuscated++;
      } else {
        revealed++;
      }
    });

    // so long as we have an array to work with, stay in this loop
    while(bitmap) {
      obfuscated--;
      revealed++;

      // a bit terse and ugly, but just building a new bitmap based on
      // our current count of obfuscated and revealed (obfuscation assumed as ones here)
      result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

      // finally, only return and indicate that we're done draining the ones
      // if that's actually true :P
      if(obfuscated > 0) {
        yield result;
      } else {
        return result;
      }
    } 
  }
}

