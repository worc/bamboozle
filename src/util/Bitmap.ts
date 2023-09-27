import ShuffledDeckGenerator from './ShuffledDeckGenerator';

type Bit = 0 | 1

interface Options extends Record<string, unknown> {
  characters: string,
  exclude: string,
  resolution: string,
}

type BitmapBooleanCallback = (value: Bit, index: number, array: Array<Bit>) => boolean;
type BitmapVoidCallback = (value: Bit, index: number, array: Array<Bit>) => void;

interface Bitmap {
  array: Array<Bit>,
  resolution: string,
  exclude: string,
  characterGenerator: Generator<string, never, IteratorYieldResult<string>>,

  setOptions(options: Options): void,
  setBitmap(bitmap: Array<Bit>): void,
  every(fn: BitmapBooleanCallback): boolean,
  fill(value: Bit): void,
  includes(value: Bit): boolean,
  forEach(fn: BitmapVoidCallback): void,
  concat(value: Bit | Array<Bit>): void,
  includes(value: Bit): boolean,
  render() : string,
}

class Bitmap implements Bitmap /*extends Array*/ {
    constructor(resolution = '', exclude = '', characters = '') {
        this.array = Array(resolution.length).fill(0);
        this.resolution = resolution;
        this.exclude = exclude;
        this.characterGenerator = ShuffledDeckGenerator<string>(characters.split(''));
    }

    setOptions(options: Options) {
      const { exclude, characters } = options;
      this.resolution = options.resolution;
      this.exclude = exclude;
        this.exclude = exclude;
        this.characterGenerator = ShuffledDeckGenerator(characters.split(''));
    }

    // can't really do operator overloading, so this will stay in use
    // even after the jump to babel 7 when we'll extend Array
    setBitmap(bitmap?:  Array<Bit>) {
        this.array = bitmap ?? [];
    }

    /*
     * we're stuck aliasing the usual API calls to a local array
     * instead of just extending the array prototype...
     *
     * at least until these issues are resolved
     * https://github.com/babel/babel/pull/7081
     * https://github.com/babel/babel/pull/8656
     *
     */
    every(fn: BitmapBooleanCallback) {
        return this.array.every(fn);
    }

    fill(value: Bit) {
        this.array.fill(value);
    }

    get length() {
        return this.array.length;
    }

    forEach(fn: BitmapVoidCallback) {
        return this.array.forEach(fn);
    }

    concat(value:  Bit | Array<Bit>) {
        return this.array.concat(value);
    }

    includes(value: Bit) {
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

export default Bitmap
