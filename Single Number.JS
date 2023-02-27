//136. Single Number

var singleNumber = function(nums) {
    let sorted = nums.sorted((a,b)=>a-b);

    for(let i=0; i<sorted.length;i++){
        if(sorted[i]!==sorted[i+1]&&sorted[i]!==sorted[i-1]){
            return sorted[i];
        }
    }


};