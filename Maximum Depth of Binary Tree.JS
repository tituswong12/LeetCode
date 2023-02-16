var maxDepth = function(root) {
    let maxDepth = 0;

    let Search = (node, depth) =>{
        if(node === null){
            return; 
        }
        if(depth>maxDepth){
            maxDepth = depth;
        }
        Search(node.left,depth +1)
        Search(node.right,depth +1)
    }
    maxDepth(root,1)
    return maxDepth;

};