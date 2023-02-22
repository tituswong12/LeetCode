//119. Pascal's Triangle II 

var getRow = function(rowIndex) {

    if(rowIndex === 0) return [1]

    let prevRow = getRow(rowIndex-1)
    let result = [1];

    for(let i=1;i<rowIndex;i++){
        result.push(prevRow[i]+prevRow[i-1])
    }
    result.push(1);
    return result;

};
