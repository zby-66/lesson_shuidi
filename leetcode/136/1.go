package main

import "fmt"

func singleNumber(nums []int) int {
	res := 0

	for _, n := range nums {
		res ^= n // 结合率
	}

	return res
	// m := make(map[int]int)
	// fmt.Println(nums)
	// for _, v := range nums {
	// 	fmt.Println(v)
	// 	_, ok := m[v] // 检测一下 hashMap  有这个k吗？
	// 	// fmt.Println(ok)
	// 	if (ok) {
	// 		// 出现过 两次
	// 		delete(m, v) // 删除了
	// 	} else {
	// 		m[v] = 1 // 为真就好， 出现过就好
	// 	}
	// }

	// for k := range m {
	// 	// fmt.Println(k)
	// 	return k
	// }

	// // fmt.Println(m)

	// return 0
}

func main() {
	// fmt.Printf("%d", singleNumber([]int{4,1,2,1,2}))
	// 011   101  110   6
	// fmt.Printf("%d", 3 ^ 5)
	fmt.Printf("%d", singleNumber([]int{2, 2, 1}))
}
