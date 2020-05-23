/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null){
        return 0;
    }
    let lh = maxDepth(root.left);
    let rh = maxDepth(root.right);
    return Math.max(lh, rh) +1;
};