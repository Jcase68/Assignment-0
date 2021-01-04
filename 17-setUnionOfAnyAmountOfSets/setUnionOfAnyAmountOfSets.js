function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let unionSet = new Set();

  for (let i = 0; i < args.length; i++){
    for (let j of args[i]){
      unionSet.add(j);
    }
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;