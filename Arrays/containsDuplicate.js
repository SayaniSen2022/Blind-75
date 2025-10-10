/**
 Leet 217: Given an integer array nums, return true if any value appears at least twice in the array,
  and return false if every element is distinct.
 */
let nums = [1,2,3];

const containsDuplicate = (nums) => {
    let  numsSet = new Set(nums);
    if(numsSet.size !== nums.length){
        return true;
    }else return false;
}

const res = containsDuplicate(nums);
console.log(res);