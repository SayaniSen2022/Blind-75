/* Binary Tree Level Order Traversal: Given the root of a binary tree, return the level order traversal 
 of its nodes' values. (i.e., from left to right, level by level).
*/

function levelOrder(root) {
  let res = [];
  if (!root) return res;

  const q = new Queue();
  q.push(root);

  while (!q.isEmpty()) {
    let level = [];
    for (let i = q.size(); i > 0; i--) {
      let node = q.pop();
      if (node !== null) {
        level.push(node.val);
        q.push(node.left);
        q, push(node.right);
      }
    }
    if (level.length > 0) {
      res.push(level);
    }
  }
  return res;
}
