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
var minDepth = function(root) {
    if (root === null){
        return 0;
    }
    let lh = minDepth(root.left);
    let rh = minDepth(root.right);
    if (!root.left || !root.right) return Math.max(lh, rh) +1;  //需要注意的是缺少一个左子树或者右子树时，要取另一个子树的最大深度
    return Math.min(lh, rh) +1;
};