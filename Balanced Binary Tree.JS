//110. Balanced Binary Tree

var isBalanced = function(root) {

    let result = true;

    let maxDepth = (node) => {
        if(!node) return null;

        
        let left = maxDepth(node.left)
        let right = maxDepth(node.right)
        if(Math.abs(left-right)>1) result = false;

        return 1 + Math.max(left,right)
    }
    maxDepth(root)
    return result

};