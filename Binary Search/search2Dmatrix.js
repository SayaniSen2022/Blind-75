/* leet 74 Search a D Matrix
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

var searchMatrix = function(matrix, target) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let top = 0;
    let bot = ROWS - 1;
    while(top <= bot){
        const row = Math.floor((top + bot)/2);
        if(target > matrix[row][COLS-1]){
            top = row + 1;
        }else if(target < matrix[row][0]){
            bot = row - 1;
        }else{
            break;
        }
    }
    if(!(top<=bot)){
        return false;
    }

    const row = Math.floor((top + bot)/2);
    let l = 0;
    let r = COLS - 1;
    while(l <= r){
        const m = Math.floor((l + r)/2);
        if(target > matrix[row][m]){
            l = m + 1;
        }else if(target < matrix[row][m]){
            r = m - 1;
        }else{
            return true;
        }
    }
    return false;
    
};