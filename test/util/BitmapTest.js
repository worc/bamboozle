import assert from 'assert';
import Bitmap from '../../src/util/Bitmap';

const testResolution = 'hello world!';

describe('Bitmap', () => {
    it('should be an instance of Array', () => {
        assert(new Bitmap() instanceof Array);
    });

    it('should be an instance of Bitmap', () => {
        assert(new Bitmap() instanceof Bitmap);
    });

    it('should have a length matching the input resolution', () => {
        let bitmap = new Bitmap(testResolution);
        assert(bitmap.length === testResolution.length);
    });

    it('should initialize as an array filled with zeroes', () => {
        let bitmap = new Bitmap(testResolution);
        assert(bitmap.every(bit => {
            return bit === 0
        }));
    });

    it('should render an obscured string when filled with ones', () => {
        let bitmap = new Bitmap(testResolution, '', '*');
        bitmap.fill(1);
        //                         'hello world!'
        assert(bitmap.render() === '************');
    });

    it('should have the forEach array function prototype', () => {

    });

    it('should have every, fill, forEach, concat, and includes function prototypes', () => {
       let bitmap = new Bitmap(testResolution);
        assert(bitmap.every);
        assert(bitmap.fill);
        assert(bitmap.forEach);
        assert(bitmap.concat);
        assert(bitmap.includes);
    });
});
