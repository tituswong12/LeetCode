//66. Plus One

var plusOne = function(digits) {

for(let i=digits.length-1; i>=0;i--){
    if(digits[i]===9){
        digits[0]
    }else{
        digits[i]++
        return digits
    }
}
if(digits[0]===0){
    digits.unshift(1)
}
return digits


};
