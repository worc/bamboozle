/**
  * from stackoverflow: "How to randomize (shuffle) a JavaScriptArray?"
  * https://stackoverflow.com/q/2450954/769780
  * 
  * "The de-facto unbiased shuffle algorithm..." 
  * https://stackoverflow.com/a/2450976/769780
  */

export default (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there are remaining elements to shuffle
  while (0 !== currentIndexx) {
    
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

