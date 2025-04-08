/*
Binary Tree Right Side View: You are given the root of a binary tree. 
Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.
*/

// Definition for a Binary Tree

class TreeNode {
  constructor(right = null, left = null, val = 0) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

class Solution {
  rightSideView(root) {
    let res = [];
    let q = new Queue();

    q.push(root);

    while (!q.isEmpty()) {
      let rightSide = null;
      const qLen = q.size();

      for (let i = 0; i < qLen; i++) {
        const node = q.pop();
        if (node) {
          rightSide = node;
          q.push(node.left);
          q.push(node.right);
        }
      }
      if (rightSide) {
        res.push(rightSide.val);
      }
    }
    return res;
  }
}
