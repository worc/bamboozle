import assert from 'assert';
import TaskRunner from '../../src/util/TaskRunner';
import Bitmap from '../../src/util/Bitmap';

const resolution = 'hello world!';
const testGenerator = {
    next: () => {
        return {
            value: [],
            done: true
        }
    }
};

describe('TaskRunner', () => {
    let testBitmap = new Bitmap(resolution);

    describe('#constructor', () => {
        let taskRunner = new TaskRunner(testBitmap);

        it('should have defaults', () => {
            assert(taskRunner.queue instanceof Array);
            assert(taskRunner.stopped === true);
        });

        it('should have the add, addLoop, addSingleRun, play, run, step, stop endpoints', () => {
            assert(taskRunner.add);
            assert(taskRunner.addLoop);
            assert(taskRunner.addSingleRun);
            assert(taskRunner.play);
            assert(taskRunner.run);
            assert(taskRunner.step);
            assert(taskRunner.stop);
        });

        it('should emit the initial state when constructed', (done) => {
            let listener = ({ message }) => {
                assert(message === 'test');
                done();
            };

            let taskRunner = new TaskRunner(new Bitmap('test'), 20, listener);
        });
    });

    describe('#step', () => {
        let testTaskRunner = new TaskRunner(testBitmap);

       it('should return a promise', (done) => {
           assert(testTaskRunner.step(testGenerator, 100) instanceof Promise);
           done();
       });
    });

    describe('#stop', () => {
        it('causes infinite recursion if it calls .updateListener() and that listener also calls .stop()');
    });

    describe('#updateListener', () => {
        it('should send the current message, activeTask, and queue to the listener', (done) => {
            new TaskRunner(testBitmap, 20, ({ message, activeTask, queue, frequency }) => {
                assert(message === resolution);
                assert(activeTask instanceof Object);
                assert(queue instanceof Array);
                assert(frequency === 20);
                done();
            });
        });
    })
});
