"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShuffledDeckGenerator_1 = __importDefault(require("./ShuffledDeckGenerator"));
class Bitmap {
    constructor(resolution = '', exclude = '', characters = '') {
        this.array = Array(resolution.length).fill(0);
        this.resolution = resolution;
        this.exclude = exclude;
        this.characterGenerator = (0, ShuffledDeckGenerator_1.default)(characters.split(''));
    }
    setOptions(options) {
        const { exclude, characters } = options;
        this.resolution = options.resolution;
        this.exclude = exclude;
        this.exclude = exclude;
        this.characterGenerator = (0, ShuffledDeckGenerator_1.default)(characters.split(''));
    }
    // can't really do operator overloading, so this will stay in use
    // even after the jump to babel 7 when we'll extend Array
    setBitmap(bitmap) {
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
    concat(value) {
        return this.array.concat(value);
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
exports.default = Bitmap;
