function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var count = 0;
  for(var j = 0; j <= arr.length; j++){
    if (arr[j] === true || arr [j] === false || typeof arr[j] === "string"){
    count++;
  }
}
return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;