class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
  let left = 0, right = nums.length - 1;
  let found = false;
  let middle;

  while (!found && left <= right){
    middle = Math.floor((left + right) /2);

    if (nums[middle] === target) {
      found = true;
    } else if (nums[middle] > target){
      right = middle - 1;
    }else{
      left = middle + 1;
    }
  }
  return found;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;