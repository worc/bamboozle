import shuffle from './Shuffle';

export default function * <T>(list: T[]): Generator<T, never, IteratorYieldResult<T>> {
    let index = 0;
    shuffle(list);

    while (true) {
        if (index >= list.length) {
            shuffle(list);
            index = 0;
        }

        yield list[index++];
    }
}
