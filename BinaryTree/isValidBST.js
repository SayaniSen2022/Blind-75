/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

//DFS

function isValidBST(root) {
  return isValid(root, -Infinity, Infinity);
}

function isValid(node, left, right) {
  if (node === null) {
    return true;
  }

  if (!(left < node.val && node.val < right)) {
    return false;
  }
  return (
    isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
  );
}
