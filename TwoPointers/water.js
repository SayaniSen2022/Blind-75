/*
You are given an integer array heights where heights[i] represents the height of the 
ith bar.
You may choose any two bars to form a container. Return the maximum amount of water a container can store.
*/

const heights = [1, 7, 2, 5, 4, 7, 3, 6];

const maxWater = (heights) => {
  let l = 0;
  let r = heights.length - 1;
  let res = 0;

  while (l < r) {
    let area = Math.min(heights[l], heights[r]) * (r - l);
    res = Math.max(res, area);
    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};
