// leetcode 解题 ->  面试
// 读书 剑指offer youtube 解法 bilibili 极客时间的算法 
// 莱文斯坦距离
var a = "mitcmu"; //原字符串
var b = "mtacnu"; // 比较的字符串
var n = 6, m = 6; // 字符串的长度
var minDist = Infinity// 最短距离  动态规划， 回溯也可以
// 回溯算法   
function lwstBT(i, j, edist) {
  if (i == n || j == m) { // 退出的 
    if (i < n) edist += (n - i); // 编辑了几个
    if (j < m) edist += (m - j);
    if (edist < minDist ) minDist = edist
    return;
  }
  if (a[i] == b[j]) { 
    // 两个位置的字符一样 为0 
    lwstBT(i + 1, j + 1, edist) //递归  
  } else {
    // 从你的全世界经过
    // i, j  多种决策需要做， 不一样
    lwstBT(i + 1, j,   edist + 1); // i 忽略了 i 被删除了 还有别的情况不？ 
    //尝试多少种可能性？
    lwstBT(i, j + 1, edist + 1);
    lwstBT(i + 1, j + 1, edist + 1);
  }
}

lwstBT(0, 0, 0)

console.log(minDist);
