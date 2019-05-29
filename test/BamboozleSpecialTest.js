import { assert } from 'chai';
import BamboozleSpecial from '../src/BamboozleSpecial';

describe('Bamboozle', () => {
    it('should inherit BamboozleCore public functions', () => {
        let bs = new BamboozleSpecial();

        assert(bs.once);
        assert(bs.start);
        assert(bs.stop);
        assert(bs.set);
        assert(bs.text);
        assert(bs.reveal);
    });
});