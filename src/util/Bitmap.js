import ShuffledDeckGenerator from './ShuffledDeckGenerator';

// todo upgrade to babel 7, extend Array
export default class Bitmap /*extends Array*/ {
    constructor(resolution = '', exclude = '', characters = '') {
        this.array = Array(resolution.length).fill(0);
        this.resolution = resolution;
        this.exclude = exclude;
        this.characterGenerator = ShuffledDeckGenerator(characters.split(''));
    }

    setOptions({ exclude, characters }) {
        this.exclude = exclude;
        this.characterGenerator = ShuffledDeckGenerator(characters.split(''));
    }

    // can't really do operator overloading, so this will stay in use
    // even after the jump to babel 7 when we'll extend Array
    setBitmap(bitmap = []) {
        this.array = bitmap;
    }

    /*
     * we're stuck aliasing the usual API calls to a local array
     * instead of just extending the array prototype...
     *
     * at least until babel 7 drops
     * https://github.com/babel/babel/pull/7081
     *
     */
    every(fn) {
        return this.array.every(fn);
    }

    fill(value) {
        this.array.fill(value);
    }

    get length() {
        return this.array.length;
    }

    forEach(fn) {
        return this.array.forEach(fn);
    }

    concat(fn) {
        return this.array.concat(fn);
    }

    includes(value) {
        return this.array.includes(value);
    }

    /* actual custom extension of the "array" prototype here: */
    render() {
        // todo after upgrading change to a straight "this" call
        return this.array.map((bit, index) => {
            let target = this.resolution.substring(index, index + 1);
            return (bit === 0 || this.exclude.includes(target)) ? target : this.characterGenerator.next().value;
        }).join('');
    }
}
