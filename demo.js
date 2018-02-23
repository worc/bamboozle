import Bamboozle from './src/Bamboozle';

const pangram = 'Pack my box with five dozen liquor jugs.';
const options = {
    characters: [
        '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
        '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
    ].join(''),
    exclude: '. '
};
const target = document.getElementById('output');

document.getElementById('start').addEventListener('click', () => {
    bam.start();
});

document.getElementById('stop').addEventListener('click', () => {
    bam.stop();
});

document.getElementById('reveal').addEventListener('click', () => {
    bam.reveal();
});

const bam = new Bamboozle(function(message) {
    target.textContent = message;
}, pangram, options);

bam.start();

