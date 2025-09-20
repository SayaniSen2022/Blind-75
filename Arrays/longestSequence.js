//leet128
/*
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
You must write an algorithm that runs in O(n) time.
*/

let  nums = [0,3,2,5,4,6,1,1];

    function longestConsecutive(nums) {
        const numSet = new Set(nums); //convertong the array to a SEt
        let longest = 0;

        for(let num of numSet){
            if(!numSet.has(num - 1)){
                let length = 1;
                while(numSet.has(num+length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }

    const res = longestConsecutive(nums);
    console.log(res);