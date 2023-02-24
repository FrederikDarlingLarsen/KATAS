

happyAlgorithm = (number) => {

let previousRes = []

let result = ''

let res = 0

let nums = []

while(true){

        let nums = Array.from(String(previousRes[previousRes.length-1]), Number);
    
        for(let i = 0; i < nums.length; i++){
          res += nums[i*i]
        }
        previousRes.push(res)

    // check if 1 or previous num
    if( res === 1){
             result='happy'
            break   
    }
    if(previousRes.length > 0){
        // return true fron 1 and false for previous num
    for(let i = 0; i < previousRes.length; i++){
        if( res === previousRes[i]){
            result='sad'
           break
        }
    }
res = 0
}
return result
}

console.log(happyAlgorithm(1))