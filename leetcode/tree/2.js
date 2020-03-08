//中序遍历构造二叉树

// 二线公司面试就这样， 一线公司面试  提升一下， 不用递归
// 缺点 ? 
function TreeNode(val) { //形成一棵树的结点
    this.val = val;
    this.left = this.right = null; //左指针， 右指针
  }
  // 完全二叉树 满
  var a1 = new TreeNode(1); //root 根结点
  var a2 = new TreeNode(2);
  var a3 = new TreeNode(3);   //一棵小树
  a1.left = a2;
  a1.right = a3;
  // 2 它的子树？  形成是不是可以用递归的思想去形成?
  var a4 = new TreeNode(4);
  var a5 = new TreeNode(5);
  a2.left = a4;
  a2.right = a5;
  var a6 = new TreeNode(6);
  var a7 = new TreeNode(7);
  a3.left = a6;
  a3.right = a7;
  //左中右
  var inorderTraversal = function(root) {
    var stack = [],  //栈
      result = [], //数组
      cur;
      // 栈 只有它的左子树，右子树都己解决了，
    //  它就可以出栈
  
    cur = root;
    // 循环一次 栈里还有结点
    while(stack.length > 0 || cur != null) {
      if (cur != null) {
        // 什么时候发生
        stack.push(cur); //入栈   向右
        cur = cur.left; //向左？  一直往左找，
      } else { // 为空
        cur = stack.pop(); //出栈 4
        result.push(cur.val); //进入结果数组
        if (cur.val == 4) {
          console.log(cur,cur.right); 
        }
        cur  = cur.right; // ?
        // console.log(cur);
      }
    }
    return result;
  }
  //          1
  //      2
  // 4 ---------结果数组  cur? 
      
  
  console.log(inorderTraversal(a1));
  