var isPalindrome = function(s) {

    let newS = s.replace(/[\W|_]/g,"").toLowerCase();
    let reverse = newS.split('').reverse().join('');

    if(reverse === newS){
        return true;
    }
    return false;



};