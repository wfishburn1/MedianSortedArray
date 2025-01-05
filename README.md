Binary Search on the Smaller Array:

The idea is to partition the arrays such that all elements on the left of the partition are less than or equal to all elements on the right.
Variables:

partitionX and partitionY split nums1 and nums2 respectively.
maxX and minX are the largest and smallest elements on either side of the partition in nums1.
maxY and minY are similar for nums2.
Conditions:

If maxX <= minY and maxY <= minX, the correct partition is found.
If not, adjust the binary search boundaries (low and high).
Median Calculation:

If the total length of both arrays is odd, the median is max(maxX, maxY).
If even, it's the average of the two middle values: (max(maxX, maxY) + min(minX, minY)) / 2.
