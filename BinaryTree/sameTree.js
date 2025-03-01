/* leet 100: Given the roots of two binary trees p and q, write a function to check if they are the same or not. 
(structurally identical and same node values) 
TC: O(n) SC: O(n)
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }

  if (p && q && p.val === q.val) {
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
  } else {
    return false;
  }
}
