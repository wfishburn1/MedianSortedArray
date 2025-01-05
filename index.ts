function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array to optimize binary search
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === m ? Infinity : nums1[partitionX];
        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === n ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // We have the correct partition
            if ((m + n) % 2 === 0) {
                // Even length
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                // Odd length
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move left in nums1
            high = partitionX - 1;
        } else {
            // Move right in nums1
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or valid.");
}