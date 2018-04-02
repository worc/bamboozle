import assert from 'assert';
import Bamboozle from '../src/Bamboozle';

const resolution = 'hello world!';

describe('Bamboozle', () => {
    describe('#constructor', () => {
        it('should have reasonable, non-crashing defaults', () => {
            let bam = new Bamboozle();
            assert(bam);
        });

        it('should take a sparse options argument and fill-in with defaults', () => {
            let bam = new Bamboozle(() => {}, resolution, { frequency: 100 });
            assert(bam.options.frequency === 100);
            assert(bam.options.startBaffled === true);
            assert(bam.options.exclude === ' ');
            assert(bam.options.characters === 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?');
        });

        it('should message the listener with the initial state', (done) => {
            new Bamboozle(( { message }) => {
                assert(message === resolution, `message: ${message}, resolution: ${resolution}`);
                done();
            }, resolution, { startBaffled: false });
        });

        it('should message the listener with the initial baffled state', (done) => {
            new Bamboozle(({ message })=> {
                //                 'hello world!'
                assert(message === '***** ******');
                done();
            }, resolution, { startBaffled: true, characters: '*' });
        });
    });

    describe('#once', () => {
        it('should send the listener a fully obfuscated message', (done) => {
            let count = 0;
            let bam = new Bamboozle(({ message }) => {
                count++;
                if(count === 1) {
                    // initialization is without baffling
                    assert(message === 'hello world!', `initial message: ${message}`);
                } else if (count === 2) {
                    // but calling .once() triggers another message, this time baffled:
                    //                 'hello world!'
                    assert(message === '***** ******', `baffled message: ${message}`);
                    done();
                }
            }, resolution, { startBaffled: false, characters: '*' });

            bam.once();
        });
    });

    describe('#start', () => {
        it('should obfuscate the message indefinitely even after fully obfuscating', (done) => {
            let count = 0;
            let bam = new Bamboozle(({ message }) => {
                assert(!message.includes('*'));

                if(count === 2) {
                    bam.stop();
                    done();
                }

                count++;
            }, '*****', { characters: '!@#'});

            bam.start();
        });

        it('causes an infinite loop if bam.taskRunner.stop() runs taskRunner.updateListener, and that listener in turn calls .stop() :/ my bad'
            // , () => {
            // let count = 0;
            // let bam = new Bamboozle(message => {
            //     console.log('recursion count', count);
            //     count++;
            //     assert(!message.includes('*'));
            //
            //     if(count === 2) {
            //         // this call initiates an infinite loop
            //         // currently at a deep level TaskRunner calls updateListener,
            //         // and this is that function... so we have .stop() => .updateListener() => .stop(), until stackoverflow
            //         bam.stop();
            //     }
            //
            //     if(count > 100) {
            //         // okay, we've proved our point, time to bail
            //         done();
            //     }
            // }, '*****', { characters: '!@#'});
            //
            // bam.start();
        // }
        );
    });

    describe('#set', () => {
        it('should merge new options with the old', () => {
            let bam = new Bamboozle();
            bam.set({ speed: 150, characters: '+' });
            assert(bam.options.speed === 150);
            assert(bam.options.characters === '+');
            assert(bam.options.exclude === ' ');
            assert(bam.options.startBaffled === true);
        });

        it('should pass exclude and characters to the bitmap', () => {
            let bam = new Bamboozle();
            bam.set({ exclude: '123', characters: '!' });
            assert(bam.bitmap.exclude === '123');
            assert(bam.bitmap.characterGenerator.next().value === '!');
        });
    });

    describe('#reveal', () => {
        it('should reveal at least one bit per cycle, even when duration is too long for the message', (done) => {
            let shortMessage = '1234';
            let duration = 1000; //
            let startTime = new Date();
            let count = 0;

            // reveal will the default frequency and the duration and determine how many steps to take to be on time
            // in this case there are 20 steps (since we're using a duration of 1000 and the default frequency is already 20)
            // then reveal divides the length of the message by the number of steps to see if we should reveal more than one bit at a time
            // and then rounds the result to the nearest integer
            // but since the steps are larger than the message we get a fraction and round to zero
            // the current fix is to set a floor of one-bit-per-cycle, even though this throws off the timing
            // so in this case even with a duration of 1000, we should complete this reveal in four steps
            // and only take 200ms give or take

            let bam = new Bamboozle(({ message }) => {
                // skip initial message from constructor
                if(count === 4) {
                    let runTime = new Date() - startTime;
                    console.log('count', count, 'message', message);
                    assert(message === shortMessage, `last message was ${message}`);
                    assert(runTime > 180 && runTime < 220, `run time was: ${runTime}`);
                    done();
                }

                count++;
            }, shortMessage);

            bam.reveal(duration);
        });
        // it('should reveal at a slower pace to match a duration too long for the message', (done) => {
        //     let shortMessage = '1234';
        //     let duration = 400; // milliseconds to spend revealing
        //     let startTime = new Date();
        //     let count = 0;
        //
        //     let bam = new Bamboozle(({ message }) => {
        //         // skip initial message from constructor
        //         if(count > 0) {
        //             let runTime = new Date() - startTime;
        //             assert(
        //                 // 4 characters revealed over 400ms should be
        //                 // about 100ms per loop, or twice the time as default
        //                 runTime > 90 && runTime < 110,
        //                 'reveal should send out an update about every 100 milliseconds'
        //             );
        //
        //             if(message === '1234') {
        //                 done();
        //             } else {
        //                 startTime = new Date();
        //             }
        //
        //         } else {
        //             count++;
        //         }
        //
        //     }, shortMessage);
        //
        //     bam.reveal(duration);
        // });
        //
        // it('should reveal at a faster pace to match a duration too short for the message', done => {
        //     let longMessage = '1234567890';
        //     let duration = 250;
        //     let startTime = new Date();
        //     let count = 0;
        //
        //     let bam = new Bamboozle(({ message }) => {
        //         // skip initial message on initialization
        //         if(count > 0) {
        //             let runTime = new Date() - startTime;
        //             assert(
        //                 // 10 characters revealed over 250ms should be
        //                 // about 25ms per loop, or half the time of the default
        //                 runTime > 20 && runTime < 30,
        //                 'reveal should send out an update about every 25 milliseconds'
        //             );
        //
        //             if(message === '1234567890') {
        //                 done();
        //             } else {
        //                 startTime = new Date();
        //             }
        //         } else {
        //             count++;
        //         }
        //     }, longMessage);
        //
        //     bam.reveal(duration);
        // });
    });
});
