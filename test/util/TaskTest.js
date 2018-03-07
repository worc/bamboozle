import assert from 'assert';
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

        it('should resolve after a duration, even if the generator is never done', (done) => {
            const args = {
                generator: {
                    next: sinon.stub().withArgs().returns({ value: [], done: false})
                },
                listener: sinon.stub(),
                duration: 50,
                frequency: 20
            };

            let test = new Task(args);
            test.run().then(() => {
                console.log('test done?');
                done();
            });
        });

        it('should run after a delay if one is provided', (done) => {

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
    })
});