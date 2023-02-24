const pigLatinSentence = (sentence) => {
    
    let words = sentence.split(' ')
    let newWords = []

    let vowels = ['a','e','i','o','u']

    for(let i = 0; i < words.length; i++){
        if(words[i][0] == 'a'||words[i][0] == 'e'||words[i][0] == 'i'||
           words[i][0] == 'o'||words[i][0] == 'u'){
           newWords.push(words[i] + "way")
        }
        else{
            let newWord = ''
            for(let j = 0; j < words[i].length; j++){
            if(words[i][j] === 'a'||words[i][j] === 'e'||words[i][j] === 'i'||
               words[i][j] === 'o'||words[i][j] === 'u'){
               
                //all letters before move to end
                for(let k = j; k < words[i].length; k++ ){
                    newWord += words[i][k] 
                }

                for(let k = 0; k < j ; k++ ){
                    newWord += words[i][k]
                }
            }
            }
            newWords.push(newWord + "ay")
        }
    }
    let result = newWords.join(' ')
    return result
}

console.log(pigLatinSentence("this is pig latin")) // ➞ "isthay isway igpay atinlay"

console.log(pigLatinSentence("wall street journal")) // ➞ "allway eetstray ournaljay"

console.log(pigLatinSentence("raise the bridge")) // ➞ "aiseray ethay idgebray"

console.log(pigLatinSentence("all pigs oink")) // ➞ "allway igspay oinkway"