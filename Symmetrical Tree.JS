//101 Symmetrical Tree

var isSymmetric = function (root){
    let boolean = true;

    function helper(p,q){
        if(!p && !q){
            return;
        }
        if(!p || !q || p.val!==q.val){
            boolean = false;
            return false;
        }
        helper(p.left,q.right)
        helper(p.right,q.left)
    }
    helper(root,root)
    return boolean;
};