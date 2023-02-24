// const getLength = (arr) => {
//     return arr.flat(Infinity).length;
// }

const getLength = (arr) => {//Arif hossain
    let length = 0;

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            length += getLength(arr[i]);
        }
    } else {
        length = 1;
    }
    return length;
}

console.log(getLength([1, [2, 3]])) //➞ 3
console.log(getLength([1, [2, [3, 4]]])) //➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) //➞ 6
console.log(getLength([1, [2], 1, [2], 1])) //➞ 5