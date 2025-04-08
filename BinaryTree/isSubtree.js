/*leet:572 Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

class TreeNode {
  constructor(left = null, right = null, val = 0) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

class Solution {
  isSubtree(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (this.sameTree(root, subRoot)) {
      return true;
    }

    return (
      this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree(root, subRoot) {
    if (!root && !subRoot) {
      return true;
    }

    if (root && subRoot && root.val === subRoot.val) {
      return (
        this.sameTree(root.left, subRoot.left) &&
        this.sameTree(root.right, subRoot.right)
      );
    }
    return false;
  }
}
