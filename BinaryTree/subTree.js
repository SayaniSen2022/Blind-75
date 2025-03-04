// leet 572: Subtree of Another Tree

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
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
