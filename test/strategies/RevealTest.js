import assert from 'assert';
import Reveal from '../../src/strategies/Reveal.js';

describe('Reveal', () =>{
    describe('#oneBitAndShuffleUntilDone', () => {
        it('should return a bitmap of the same length, when all bits are zeroes', () => {
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

    describe('#leftToRight', () => {
        it('should return an empty array when given an empty array', () => {
            let testArray = [];
            let generator = Reveal.leftToRight(testArray);

            let { value, done } = generator.next();
            assert(value.length === 0);
            assert(done);
        });

        it('should yield an array with ones turned to zeroes from left to right', () => {
            let testArray = [1, 1, 1];
            let generator = Reveal.leftToRight(testArray);
            assert(generator.next().value.join('') === [0, 1, 1].join(''));
            assert(generator.next().value.join('') === [0, 0, 1].join(''));
            assert(generator.next().value.join('') === [0, 0, 0].join(''));
        });

        it('should yield an array at each step even when the bit for that step is already revealed', () => {
            let testArray = [0, 1, 1];
            let generator = Reveal.leftToRight(testArray);
            assert(generator.next().value.join('') === [0, 1, 1].join(''));
        });

        it('should return an array early if all values are already zeroes', () => {
            let testArray = [0, 0, 0];
            let generator = Reveal.leftToRight(testArray);
            let { value, done } = generator.next();
            assert(value);
            assert(done);
        })
    });

    describe('#outsideToInside', () => {
        it('should flip bits from the edges towards the center for odd-length arrays' , () => {
            let testArray = [1, 1, 1];
            let generator = Reveal.outsideToInside(testArray);
            let value, done;
            ({ value } = generator.next());
            assert(value.join('') === [0, 1, 0].join(''));

            ({ value, done } = generator.next());
            assert(value.join('') === [0, 0, 0].join(''));
            assert(done);
        });

        it('should flip bits from the edges towardsthe center for even-length arrays', () => {
            let testArray = [1, 1, 1, 1];
            let generator = Reveal.outsideToInside(testArray);
            let value, done;
            ({ value } = generator.next());
            assert(value.join('') === [0, 1, 1, 0].join(''));

            ({ value, done } = generator.next());
            assert(value.join('') === [0, 0, 0, 0].join(''));
            assert(done);
        });
    })
});
