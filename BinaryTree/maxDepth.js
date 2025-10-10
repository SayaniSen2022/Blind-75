/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Input: root = [3,9,20,null,null,15,7]
Output: 3
Three approaches to solve: Recursive DFS, Iterative DFS, Breadth First Search
*/

/*
Definition of Binary Tree Node

class TreeNode {
  constructor(val = 0, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
*/

//Recursive DFS

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//BFS
maxDepth(root){
  const q = new Queue();
  if(root !== null){
    q.push(root);
  }

  let level = 0;
  while(q.size() > 0){
    const size = q.size();
    for(let i = 0 ; i < size; i++){
      const node = q.pop();
      if(node.left !== null){
        q.push(node.left);
      }
      if(node.right !== null){
        q.push(node.right);
      }
    }
    level++;
  }
  return level;
}