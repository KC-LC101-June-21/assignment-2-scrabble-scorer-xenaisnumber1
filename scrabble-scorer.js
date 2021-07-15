// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure) {
		  if (oldPointStructure[pointValue].includes(word[i])) {
			  letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		  }
	  }
	}
	return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userInput = input.question("Let's play some scrabble! Enter a word:");

   return userInput
};



function simpleScore(word)
{
word = word.toUpperCase();
let score = 0;
  for (let i = 0; i < word.length; i++){
    score += 1}
  console.log(score)

  return score;
}

function vowelBonusScore(word)
{
word = word.toUpperCase();
let score = 0;
  for (let i = 0; i < word.length; i++){
    if ('AEIOU'.includes(word[i])){
      score += 3
    } else {
      score += 1
    }
  }
    return score
  }
console.log(vowelBonusScore("Jacki"))

let newPointStructure = transform(oldPointStructure);

function scrabbleScore(word){
  word = word.toUpperCase()
  let cumulativeScore = 0;
    for (let i = 0; i < word.length; i++){
      
      cumulativeScore += newPointStructure[word[i]]
    }
    return cumulativeScore
}






const scoringAlgorithms = [
  {
    name: 'Simple',
    description: 'Each letter is worth 1 point',
    scoringFunction: simpleScore,
  },

  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore,
  },

  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore,
  }

]

// console.log(scoringAlgorithms)



function scorerPrompt(){
  let selectedAlgorithm = ("Which scoring algorithm would you like to use?")
;
 console.log(selectedAlgorithm)
 console.log(`0 - ${scoringAlgorithms[0].name} : ${scoringAlgorithms[0].description}`)
  console.log(`1 - ${scoringAlgorithms[1].name} : ${scoringAlgorithms[1].description}`)
  console.log(`2 - ${scoringAlgorithms[2].name} : ${scoringAlgorithms[2].description}`)

  let algorithmChoice = input.question ("Enter 0, 1, or 2:")

  console.log (algorithmChoice);
 return algorithmChoice;
}


function transform (oldPointsStructure) {
  const newObject = {}
  for (let point in oldPointsStructure){
    // console.log('This is your point: ', point)
    let newKeys = oldPointsStructure[point]
    // console.log('this is your newKeys', newKeys)
    for (let a = 0; a < newKeys.length; a++) {
    //  console.log(newKeys[a])
     newObject[newKeys[a]] = Number(point) 
    }
}
    return newObject

}



function runProgram() {
   let word = initialPrompt();
    console.log('This this word: ', word)
   let number = scorerPrompt();

  //  slet word score 

  // if (number === 0) {  
  //   scoringAlgorithms(word[0]);
  //   } else if (number === 1) {
  //     scoringAlgorithms(word[1]);
  //   } else (number === 2) {
  //     scoringAlgorithms(word[2]);
  //   }

    
  // console.log(scoringAlgorithms[number] .scoringFunction(word))


   console.log(`Score for '${word}' : ${scoringAlgorithms[number].scoringFunction(word)}`)
   
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
