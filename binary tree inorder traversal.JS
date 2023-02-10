var inorderTraversal = function(root) {
    let pointer1 = root;
    let solution = []

    while(pointer1 !== null){
          let pointer2 = pointer1.left;
          
          if(pointer1.left !== null){
            while (pointer2.right !== null && pointer2.right !== pointer1){
                pointer2 = pointer2.right;
            }
            if(pointer2.right === null){
                 pointer2.right = pointer1;
                pointer1 = pointer1.left;
            }else{
                pointer2.right = null
                solution.push(pointer1.val)
                pointer1 = pointer1.right;
          }
          }else{
              solution.push(pointer1.val);
              pointer1 = pointer1.right
          }

    }
    return solution
};