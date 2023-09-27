/**
  * from stackoverflow: "How to randomize (shuffle) a JavaScriptArray?"
  * https://stackoverflow.com/q/2450954/769780
  *
  * "The de-facto unbiased shuffle algorithm..."
  * https://stackoverflow.com/a/2450976/769780
  *
  * Fisher-Yates visualized: https://bost.ocks.org/mike/shuffle/
  */

export default <T = any>(array: T[]) => {
  // rename currentIndex to "end of the array?" or end of unshuffled range? start of shuffled range?
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there are remaining elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor( Math.random() * currentIndex );
    currentIndex -= 1;

    // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }

  return array;
}

