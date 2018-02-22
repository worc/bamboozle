import assert from 'assert';
import TaskRunner from '../../src/util/TaskRunner';

describe('TaskRunner', () => {
    describe('#constructor', () => {
        it('should have sane defaults', () => {
            let taskRunner = new TaskRunner();
            assert(taskRunner.bitmap);
            assert(taskRunner.options);
            assert(taskRunner.listener);
        });
    });
});
