/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let output = [];
    for(let column = 0; column < array[0].length; column++){
        let output2=[];
        for (let row =0; row <array.length; row++){
            output2.push(array[row][column])
        }
        output.push(output2)
    }
    return output;
}

module.exports = transpose;
