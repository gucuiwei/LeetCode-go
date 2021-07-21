class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s_list = s.split(' ')
        for i in range(len(s_list) - 1, -1, -1):
            if s_list[i] != '':
                return len(s_list[i])
            else:
                if i == 0:
                    return 0