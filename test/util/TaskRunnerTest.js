import { assert } from 'chai';
import TaskRunner from '../../src/util/TaskRunner';
import Bitmap from '../../src/util/Bitmap';

const resolution = 'hello world!';

describe('TaskRunner', () => {
    let testBitmap = new Bitmap(resolution);

    describe('#constructor', () => {
        let taskRunner = new TaskRunner(testBitmap);

        it('should have a default queue and running set to false', () => {
            assert(taskRunner.queue instanceof Array);
            assert(taskRunner.running === false);
        });

        it('should have the add, addLoop, addSingleRun, play, stop endpoints', () => {
            assert(taskRunner.add);
            assert(taskRunner.addLoop);
            assert(taskRunner.addSingleRun);
            assert(taskRunner.play);
            assert(taskRunner.stop);
        });

        it('should emit the initial state when constructed', (done) => {
            let listener = ({ message }) => {
                assert(message === 'test');
                done();
            };

            new TaskRunner(new Bitmap('test'), 20, listener);
        });
    });

    describe('#stop', () => {
        it('causes infinite recursion if it calls .update() and the listener in turn calls .stop(), SO DO NOT ADD AN UPDATE CALL');
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
