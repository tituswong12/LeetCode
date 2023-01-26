var isValid = function(s) {

    let output = []

    let map = {
        "[":"]",
        "(":")",
        "{":"}"
    }

    for(let char of s){
        if(map[char]){
            output.push(map[char])
        }else if(output.length>0 && output[output.length-1]===char){
            output.pop()
        }else{
            return false
        }

    }
    return output.length === 0
}