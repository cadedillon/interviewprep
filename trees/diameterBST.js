// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let res = 0;

  var dfs = function (root) {
    if (root === null) {
      return -1;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    res = Math.max(res, 2 + left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);
  return res;
};
