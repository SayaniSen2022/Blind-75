/*leet 704: Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.
*/

let nums = [-1,0,1,2,5,8,9,10,12,16];
let target = 9;

const binarySearch = (nums, target) =>{
    let [left, right] = [0, nums.length-1];    

    while(left <= right){
        const mid = left + Math.floor((right - left)/2);
        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else {
            return mid;
        }
    }
    return -1;
}

const result = binarySearch(nums, target);
console.log(result);

//recursive binary search
// const binarySearch = (l, r, nums, target){
//     if(l>r) return -1;

//     let m = l + Math.floor((r-l)/2);

//     if(nums[m] === target) return m;

//     return nums[m] > target ? this.binarySearch(l, m - 1, nums, target) : this.binarySearch(m + 1, r, nums, target)
// }
// binary_search(nums, target){
//     return this.binary_search(0, nums.length-1, nums, target);
// }