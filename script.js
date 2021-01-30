const fs = require('fs')
const sentenceLength = 20
const words = fs.readFileSync("words.txt").toString().split('\n')
// console.log(words)

/**
 * this is a helper function in order to retrieve the length of the array
 * @param {words*} array 
 */
const totalWords = (array) => {
    arrayLength = array.length -1
    //  console.log(arrayLength)
     return arrayLength
}

/**
 * returns a random number
 * @param {words*} max 
 */
const randomNum = (max) =>{
    return Math.floor(Math.random() * max)
}

/**
 * this return a random sentence length within the maximum value - 20
 * @param {sentenceLength*} max 
 */
const randomSentenceLength = (max) => {
    return Math.floor(Math.random() * max)
}
/**
 * this function selects a random word from the words array 
 * @param {words*} array 
 * @param {totalWords*} functionA 
 */
const randomWord = (array, functionA) => {
        let word = array[functionA];
        return word; 
        
    }

/**
 * this returns a random sentence between 1-20 in no specific order
 */
const randomSentence = () => {
    for( let i = 0; i < sentenceLength; i++){
        console.log((randomWord(words, randomNum(totalWords(words)))))
    }
}
randomSentence()