# 删除有序数组中的重复项
奔向体面


给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


读题：
    sortedArr [1,1,2]
    return length 2

- 一次遍历， ？
    res []  空间复杂度 O（n）
    for
    排好序 后面的项一定会大于或等于前面的项
    等于就原地删除
    res length
    提升抽象能力，数理逻辑
    leetcodeAnimation
- 动图
    两个指针    pre cur
    cur 一直在往前指，一次循环的每一项遍历
    pre 后面追
    pre cur arr 前一个，后一个
    不等于时pre+1,相等时 pre 不往下指
    如果cur pre 不一样， 那么 pre+1 等于 cur
    从头到尾都是排好序的不重复数
    每个位置放什么数？
    pre 指针 没有跟上cur 的速度时， 表示由重复
    pre cur n个空位
    pre + 1删除，把当前cur的值,交给pre
- 快慢指针
    1. 一次循环 cur++ 一直跑
    2. cur 跟pre arr[] 不等的话，
    pre++ 
    相等的话 pre 不动
    3. cur 再走的时候， 继续比较
    新的cur 跟旧的pre
    不等时， pre++ 并把 cur值给新的pre
    把因为之前重复空出来的位置 給填上。
    4. cur>length

- 数据结构 链表
    [1,1,2] 链表
    LinkedList   next
    1 1 1 next 指向1， 改成指向2 

    把数组要维持位置 比快慢指针好理解多了