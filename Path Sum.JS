//112. Path Sum
var hasPathSum = function(root, targetSum) {
    let result = false;

    function helper(node, currSum){
        if(!node || result){
            return false;
        }

        currSum+=node.val
        if(!node.left && !node.right && currSum === targetSum){
            result = true;
        }
        helper(node.left, currSum);
        helper(node.right, currSum)
    }

    helper(root,0);
    return result;
};