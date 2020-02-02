from typing import List
class Solution:
    def distributeCandies(self, candies: List[int]) -> int:
        # min 函数式内置函数 
        return min(len(set(candies)), len(candies)>>1) #set 去重
    