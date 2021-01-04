function frequencyCounter(word) {
  // Insert code here;
  let frequencyObj = {}
  word.split(' ').forEach((letter) => {
    frequencyObj[letter] = frequencyObj[letter] ? frequencyObj[letter] + 1: 1;
  })
return frequencyObj;
}

// Do not edit this line;
module.exports = frequencyCounter;