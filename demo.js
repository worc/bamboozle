import Bamboozle from './src/Bamboozle';
import BamboozleSpecial from './src/BamboozleSpecial';

const pangram = 'Pack my box with five dozen liquor jugs.';
const options = {
    characters: [
        '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
        '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
    ].join(''),
    exclude: '. '
};
const target = document.getElementById('output');
const basicQueue = document.getElementById('basic-queue');

function displayQueue(container, activeTask, queue) {
    let html = '<ul>';
    if(activeTask.strategyGenerator) {
        html += `<li><strong>${activeTask.strategyGenerator.name}</strong></li>`;
    }

    queue.forEach(item => {
        html += `<li>${item.strategyGenerator.name}</li>`;
    });
    html += '</ul>';

    container.innerHTML = html;
}

document.getElementById('start').addEventListener('click', () => {
    bam.start();
});

document.getElementById('stop').addEventListener('click', () => {
    bam.stop();
});

document.getElementById('reveal').addEventListener('click', () => {
    bam.reveal();
});

const bam = new Bamboozle(function(message, activeTask, queue) {
    displayQueue(basicQueue, activeTask, queue);
    target.textContent = message;
}, pangram, options);

bam.start();

document.getElementById('basic-frequency').addEventListener('input', (event) => {
    console.log(event.target.value);
    bam.set({ frequency: event.target.value });
});

/* ================================ */

const specialPangram = 'Sixty zippers were quickly picked from the woven jute bag.';
const specialTarget = document.getElementById('special');

const bs = new BamboozleSpecial(message => {
    specialTarget.textContent = message;
}, specialPangram, options);

bs.once();

document.getElementById('special-controls').addEventListener('click', (event) => {
    switch (event.target.id) {
        case 'r-ltr':
            bs.revealLeftToRight();
            break;
        case 'r-rtl':
            bs.revealRightToLeft();
            break;
        case 'r-ito':
            bs.revealInsideToOutside();
            break;
        case 'r-oti':
            bs.revealOutsideToInside();
            break;
        case 'o-ltr':
            bs.obfuscateLeftToRightUntilDone();
            break;
        case 'o-rtl':
            bs.obfuscateRightToLeftUntilDone();
            break;
        case 'o-ito':
            bs.obfuscateInsideToOutsideUntilDone();
            break;
        case 'o-oti':
            bs.obfuscateOutsideToInsideUntilDone();
            break;
        default:
            console.error(`didn't match an id`);
    }
});

// document.getElementById('duration').addEventListener('change', (event) => {
//     console.log(event);
// });


