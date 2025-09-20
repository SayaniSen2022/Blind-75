/*
Inorder traversal: An inorder traversal first visits the left child (including its entire subtree), 
then visits the node, and finally visits the right child (including its entire subtree).
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//Recursive DFS
const inorderTraversal = (root) => {
  const res = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  };

  inorder(root);
  return res;
};
