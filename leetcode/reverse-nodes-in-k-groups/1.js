function ListNode(val) {
    this.val = val
    this.next = null;
}


const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// console.log(n1);

var reverseKGroup = function(head, k) {
    if(!head || k==1){  //空链表，或 k为1
      return head;
    }
    var dummy = { //哨兵结点
    next: head
    }
    // reverse
    var start = dummy;//初始化时为dummy， 动态 之后会变成每个小组的开始结点
    var end = head;//初始化时?k相关  
    var count = 0;

    while(end!=null){//一次遍历
        count++;
      
        if(count % k == 0){
            //反转  得到小组数
            //更新start 一次反转后 start 应该是这次反转的尾部结点
           start= reverse(start, end.next)//将这个小组反转  要能跟其他小组链接上
            end = start.next;// 第一个结点
        }else{
            end = end.next;//更新end的值
        }
        
    }
    return dummy.next;
}
// start, end 是要reverse的
// 一次翻转
var reverse = function(start, end){
    var cur = start.next; //头节点 dummy 1 开始
    var prev = start; //前驱结点
    var first = cur; //保存第一个结点 尾部节点 下一组的头指针
    while(cur != end) { //end 3 当前小组的 【1，2】
        var temp = cur.next;//temp 下一个结点
        cur.next = prev //reverse
        prev = cur;//当前结点变成下一次的前驱结点
        cur = temp; //当前结点为下一个结点
    }
    //prev? 变成小组里的头结点
    start.next = prev;
    first.next = cur; //原来的头节点变成了尾部结点
    //小组之间连起来，上一次的尾部结点指向一个小组的开始结点
    return first;
}

console.log(reverseKGroup(n1,3));