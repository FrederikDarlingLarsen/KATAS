const clockwiseCipher = (msg) => {
 let result = " "
 
    let arr = 
   [[' ',' ',' ',' '],
    [' ',' ',' ',' '],
    [' ',' ',' ',' '],
    [' ',' ',' ',' ']]

    arr[0][0] = msg[0]
    arr[0][3] = msg[1]
    arr[3][3] = msg[2]
    arr[3][0] = msg[3]
    arr[1][0] = msg[4]
    arr[3][1] = msg[5]
    arr[2][3] = msg[6]
    arr[2][0] = msg[7]
    arr[2][0] = msg[8]
    arr[3][2] = msg[9]
    arr[1][3] = msg[10]
    arr[0][1] = msg[11]
    arr[1][1] = msg[12]
    arr[1][2] = msg[13]
    arr[2][2] = msg[14]
   // arr[0][0] = msg[15]

   for(let i = 0; i < arr.length; i++){
    result += arr[i].join('')
   }

    return result
}
console.log(clockwiseCipher("Mubashir Hassan"))