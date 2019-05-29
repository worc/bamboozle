import { assert } from 'chai';
import sinon from 'sinon';
import Task from '../../src/util/Task';

describe('Task', () => {
    describe('#run', () => {
        it('should return a promise', (done) => {
            const mockGenerator = {
                next: sinon.stub()
            };
            mockGenerator.next.withArgs().returns({ value: [], done: true});

            const mockListener = sinon.stub();

            const args = {
                generator: mockGenerator,
                listener: mockListener
            };

            assert(new Task(args).run().then(done) instanceof Promise);
        });

        it('should resolve and stop after a duration, even if the generator is never done', (done) => {
            const args = {
                generator: {
                    next: sinon.stub().withArgs().returns({ value: [], done: false})
                },
                listener: sinon.stub(),
                duration: 50,
                frequency: 20
            };

            let test = new Task(args);
            test.run().then(done);
        });

        it('should run after a delay and then stop if one is provided', (done) => {
            const args = {
                generator: {
                    next: sinon.stub().withArgs().returns({ value: [], done: true})
                },
                listener: sinon.stub(),
                frequency: 20, // 50 ms
                delay: 50
            };

            let test = new Task(args);
            const startTime = new Date();
            console.log(startTime);

            test.run().then(() => {
                const timeElapsed = new Date() - startTime;
                // 50ms delay, and no time for any cycle,
                assert(timeElapsed > 90 && timeElapsed < 110, `timeElapsed: ${timeElapsed}`);
                done();
            });
        });
    });

    describe('#frequency', () => {
        it('should set the period when a value is set', () => {
            const mockGenerator = {
                next: sinon.stub()
            };
            mockGenerator.next.withArgs().returns({ value: [], done: true});

            const mockListener = sinon.stub();

            const args = {
                generator: mockGenerator,
                listener: mockListener
            };

            let test = new Task(args);

            // 100hz should translate to a 10ms period
            test.frequency = 100;
            assert(test.period === 10, `test.period: ${test.period}`);
        });
    });

    describe('#stop', () => {
        const mockGenerator = {
            next: sinon.stub()
        };
        mockGenerator.next.withArgs().returns({ value: [], done: false});

        const mockListener = sinon.stub();

        const args = {
            generator: mockGenerator,
            listener: mockListener
        };

        it('should stop a running task', (done) => {
            let test = new Task(args);
            test.run().then(done);
            test.stop();
        });

        it('should stop a task early if it has a duration', (done) => {
            // anything over 2000ms should cause mocha to throw an error
            const durationArgs = { duration: 2500, ...args };
            let test = new Task(durationArgs);

            test.run().then(done);
            test.stop();
        });

        it('should stop a task early if it has a delay', (done) => {
            const delayArgs = { delay: 2500, ...args };
            let test = new Task(delayArgs);

            test.run().then(done);
            test.stop();
        });
    });
});