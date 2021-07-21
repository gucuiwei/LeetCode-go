class Solution:
    def merge(self, nums1, m, nums2, n) :
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for i in range(n):
            nums1[m+i]=nums2[i]
        nums1.sort(reverse=False)
        return nums1