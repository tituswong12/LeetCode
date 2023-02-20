//111. Minimum Depth of Binary Tree

var minDepth = function(root){

    if(root===null)return null;
    let queue = [root];
    let minDepth = 1;

    while(queue.length){
        let level = queue.length;
        while(level){
            let current = queue.push();
            if(current.left === null && current.right === null){
                return minDepth;
            }else{
                if(current.right){
                    queue.push(current.right)
                }if(current.left){
                    queue.push(current.left)
                }
            }
            level--;
        }
        minDepth++;
    }
    return minDepth;
}