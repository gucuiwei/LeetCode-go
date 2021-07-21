class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.result=[] #存放所有元素


    def push(self, val: int) -> None:
        self.result.append(val)


    def pop(self) -> None:
        if self.result:
            self.result.pop()


    def top(self) -> int:
        if self.result:
            return self.result[-1]


    def getMin(self) -> int:
        if self.result:
            return min(self.result)


