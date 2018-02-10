import assert from 'assert';
import Reveal from '../../src/strategies/Reveal.js';

describe('Reveal', function() {
  describe('#oneBitAndShuffleUntilDone', function() {
    it('should return a bitmap of the same length, when all bits are zeroes', function() {
      let testArray = [0, 0, 0];
      let generator = Reveal.oneBitAndShuffleUntilDone(testArray); 
      assert.equal(generator.next().value.length, 3);
    });
    
    it('should return done: true when all bits are zeroes', () => {
      let testArray = [0, 0, 0];
      let generator = Reveal.oneBitAndShuffleUntilDone(testArray);
      assert(generator.next().done);
    });

    it('should yield an array with one less one on each step', () => {
      let testArray = [1, 1, 1];
      let generator = Reveal.oneBitAndShuffleUntilDone(testArray);
      
      assert(generator.next().value.join('').match(/1/g).length === 2, 'first yield with 2 ones');
      assert(generator.next().value.join('').match(/1/g).length === 1, 'second yield with 1 ones');
      assert(generator.next().value.join('').match(/1/g) === null, 'third and last return with 0 ones');
    });  
  });
});

