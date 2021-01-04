function cutInHalfAndFloor(num) {
  // Insert code here;
  var x = prompt ("Enter a number");
  
  x = parsefloat(x);
  
  var y = x / 2; 

  var z = Math.floor(y);

  return "The answer is " + y;
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;