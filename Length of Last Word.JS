//58. Length of Last Word


var lengthOfLastWord = function(s) {

    let lastWordLength = 0;

    for(let i = s.length-1;i>=0; i--){
        if(s[i]!=' '){
            for(let j=i; j>=0; j--){
                if(s[j]!==' '){
                    lastWordLength++
                }else{
                    return lastWordLength
                }
            }
        return lastWordLength
        }
       
    }


};