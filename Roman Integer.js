var romanToInt = function(s) {
    let result = 0
    let output = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    for(let i =0;i<s.length;i++){
        if(output[s[i]]<output[s[i+1]]){
            result-=output[s[i]]
        }else{
            result+=output[s[i]]
        }
    }

return result
}