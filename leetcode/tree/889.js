/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 依据前序遍历的左子树的第一个元素进行划分
 * 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 *输出：[1,2,3,4,5,6,7]
 * 
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(!pre.length || !post.length) return null;
    let rootVal = pre[0];
    let root = new TreeNode(rootVal);
    if(pre.length<1) return null;
    let i = post.findIndex(e => e === pre[1]);
    root.left = constructFromPrePost(pre.slice(1, i+2),post.slice(0,i+1))
    root.right = constructFromPrePost(pre.slice(i+2),post.slice(i+1,post.length-1))
    return root;
};