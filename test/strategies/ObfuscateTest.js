import assert from 'assert';
import Obfuscate from '../../src/strategies/Obfuscate';

describe('Obfuscate', () => {
    describe('#oneBitAndShuffleUntilDone', () => {
        it('should return when all bits are ones', () => {
            let testArray = [1, 1, 1];
            let generator = Obfuscate.oneBitAndShuffleUntilDone(testArray);
            let { value, done } = generator.next();
            assert(value);
            assert(done)
        });

        it('should return an empty array when given an empty array', () => {
            let generator = Obfuscate.oneBitAndShuffleUntilDone([]);
            let { value, done } = generator.next();
            assert(value);
            assert(done);
        });

        it('should yield an array with one more one on each step', () => {
            let generator = Obfuscate.oneBitAndShuffleUntilDone([0, 0, 0]);
            assert(generator.next().value.join('').match(/1/g).length === 1, 'first yield with 1 ones');
            assert(generator.next().value.join('').match(/1/g).length === 2, 'second yield with 2 ones');
            assert(generator.next().value.join('').match(/1/g).length === 3, 'third and last return with 3 ones');
        });
    });

    describe('#oneBitAndShuffleForever', () => {
        it('should not be done even when all bits are ones', () => {
            let generator = Obfuscate.oneBitAndShuffleForever([1]);
            assert(!generator.next().done);
            assert(!generator.next().done);
        });
    });
});