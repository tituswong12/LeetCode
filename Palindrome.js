var isPalindrome = function(x) {
    let reverse = x.toString().split('').reverse().join('')
    if(reverse === x.toString()){
        return true
    }
    return false
};