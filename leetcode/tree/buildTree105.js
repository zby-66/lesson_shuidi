/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *前序遍历 preorder = [3,9,20,15,7]
 *中序遍历 inorder = [9,3,15,20,7]
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
     }
      preorder = [3,9,20,15,7]
      inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let i = inorder.findIndex(e=> e === rootVal);
    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0,i));
    root.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
    return root;
};

console.log(buildTree(preorder, inorder));