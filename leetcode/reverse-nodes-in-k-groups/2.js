function ListNode(val) {
    this.val = val;
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
    //reverse 
    //以哨兵结点为开始
    var start = dummy;  //初始化时为dummy,动态变化成每个小组的开始结点
    var end = head;  //与K的取值有关 这个小组的第一个节点
    var count = 0;  //计数
    while(end != null){   //一次遍历
      count++;  
      // if(count < 3){
      //   //[1,2]
      //   console.log(start,'-----------');
      // }
      if(count % k == 0){ //整除  需要翻转
        start = reverse(start, end.next) //反转 将小组翻转
        end = start.next; //第一个结点
      } else{
        end = end.next; //更新end的值      
      }
  
    }
    return  dummy.next;
  }
  //start,end 是需要reverse的
  //需要一次翻转
  var reverse = function(start,end){
    var cur = start.next;  //头结点
    var prev = start;  //前趋结点
    var first = cur;  //保存第一个结点  结尾点  下一组的头指针
    while(cur != end) { //end 3 当前小组的[1,2]
      var temp   =cur.next;  //temp 下一个结点单独取出
      cur.next  = prev; //reverse
      prev = cur; //当前结点变成下一次的前趋结点
      cur= temp;  //当前结点变为下一个结点
  
    }
    //prev 变成小组里的尾结点
    start.next = prev;
    first.next = cur;   //原头结点变为尾结点
    //需要将小组链接起来  上一次的尾结点指向下各小组的开始结点
    return  first;
  }
  console.log(reverseKGroup(n1,3));