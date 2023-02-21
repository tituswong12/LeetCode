//118. Pascal's Triangle 

var generate = function(numRows) {

    let pascals = new Array(numRows);

    for(let i=0;i<numRows;i++){
        let rows = new Array(i+1);
        rows[0] = 1;
        rows[rows.length-1] = 1;

        for(let j = 1; j<rows.length-1; j++){
            let prevRow = pascals[i-1];
            rows[j] = prevRow[j] + prevRow[j-1];
        }
        pascals[i] = rows;
    }
    return pascals;
};