/*
You are given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 */

//brute force

const nums = [1, 2, 4, 5, 6, 3, 1];

const findMissingPositive = (nums) => {
  let missing = 1;

  while (true) {
    let flag = true;

    for (let num of nums) {
      if (num === missing) {
        flag = false;
        break;
      }
    }
    if (flag) return missing;
    missing++;
  }
};

const res = findMissingPositive(nums);
console.log(res);
