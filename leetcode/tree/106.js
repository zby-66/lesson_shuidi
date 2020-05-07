/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder.length) return null;
    let rootVal = postorder[postorder.length -1];
    let root = new TreeNode(rootVal);
    let i = inorder.findIndex(e => e === rootVal);
    root.left = buildTree(inorder.slice(0,i),postorder.slice(0,i));
    root.right = buildTree(inorder.slice(i+1),postorder.slice(i,postorder.length -1));
    return root;
};