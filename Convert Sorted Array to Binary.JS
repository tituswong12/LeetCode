//109. Convert Sorted Array to Binary

var sortedArrayToBST = function(nums, left =0, right = nums.length-1 ){

    
    if(left>right) return null;

    let middle = Math.floor((left+right)/2)
    let root = new TreeNode(nums[middle])

    root.left = sortedArrayToBST(nums, left, middle-1)
    root.right = sortedArrayToBST(nums, middle+1,right)

    return root;

};