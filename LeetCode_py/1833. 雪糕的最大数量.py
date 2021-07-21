class Solution:
    def maxIceCream(self, costs, coins: int):
        num = 0
        costs = sorted(costs)
        for i in range(len(costs)):
            if coins - costs[i] >= 0:
                num += 1
                coins = coins - costs[i]
        return num
