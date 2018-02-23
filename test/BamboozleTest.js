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
            let bam = new Bamboozle(() => {}, resolution, { speed: 100 });
            assert(bam.options.speed === 100);
            assert(bam.options.startBaffled === true);
            assert(bam.options.exclude === ' ');
            assert(bam.options.characters === 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?');
        });
    });

    describe('#once', () => {
        it('should send the listener a fully obfuscated message', (done) => {
            let bam = new Bamboozle(message => {
                //                 'hello world!'
                assert(message === '***** ******');
                done();
            }, resolution, { startBaffled: false, characters: '*' });

            bam.once();
        });
    });

    describe('#start', () => {
        it('should obfuscate the message indefinitely even after fully obfuscating', (done) => {
            let count = 0;
            let bam = new Bamboozle(message => {
                assert(!message.includes('*'));

                if(count === 2) {
                    bam.stop();
                    done();
                }

                count++;
            }, '*****', { characters: '!@#'});

            bam.start();
        });
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
        it('should reveal at a slower pace to match a duration too long for the message', (done) => {
            let shortMessage = '1234';
            let duration = 400; // milliseconds to spend revealing
            let startTime = new Date();

            let bam = new Bamboozle(message => {
                let runTime = new Date() - startTime;
                assert(
                    // 4 characters revealed over 400ms should be
                    // about 100ms per loop, or twice the time as default
                    runTime > 90 && runTime < 110,
                    'reveal should send out an update about every 100 milliseconds'
                );

                if(message === '1234') {
                    done();
                } else {
                    startTime = new Date();
                }

            }, shortMessage);

            bam.reveal(duration);
        });

        it('should reveal at a faster pace to match a duration too short for the message', done => {
            let longMessage = '1234567890';
            let duration = 250;
            let startTime = new Date();

            let bam = new Bamboozle(message => {
                let runTime = new Date() - startTime;
                assert(
                       // 10 characters revealed over 250ms should be
                    // about 25ms per loop, or half the time of the default
                    runTime > 20 && runTime < 30,
                    'reveal should send out an update about every 25 milliseconds'
                );

                if(message === '1234567890') {
                    done();
                } else {
                    startTime = new Date();
                }
            }, longMessage);

            bam.reveal(duration);
        });
    });
});