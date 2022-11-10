var readlineSync = require('readline-sync')
var score = 0;

console.log

var userName = readlineSync.question("What is your name? :")
console.log("Welcome to this game " + userName + ". How much do you know about India? Let's find out!")
console.log("----------Just Type A B C D----------")

var arr = [{
  question: "What is my the national river of India? \n A: Brahmaputra \n B: Narmada \n C: Yamuna \n D: Ganga \n",
  answer: "D"
}, {
  question: "What is the motto of Indian National Emblem? \n A: Vande Mataram \n B: Sare Jahan se Accha \n C: Hindustan Hamara \n D: Satyameva Javate \n",
  answer: "D"
}, {
  question: "When was the Indian Medical Council set up? \n A: 1975 \n B: 1981 \n C: 1980 \n D: 1971 \n",
  answer: "D"
}, {
  question: "What is national flower of India? \n A: Rose \n B: Jasmine \n C: Lotus \n D: Lily \n",
  answer: "C"
}, {
  question: "When was the national song of India first publicly sung? \n A: 1857 \n B: 1896 \n C: 1911 \n D: 1950 \n",
  answer: "B"
}, {
  question: "What is national aquatic animal of India? \n A: Ganges River Dolphin \n B: Blue Whale \n C: Shark \n D: Octopus \n",
  answer: "A"
}, {
  question: "When was the Indian rupee sign adopted by the Government of India? \n A: 15 July 2010 \n B: 15 August 2010 \n C: 26 January 2010 \n D: 26 February 2010 \n",
  answer: "A"
}, {
  question: "Who composed the national anthem of India? \n A: Muhammad Iqbal \n B: Bankim Chandra Chatterjee \n C: Sri Aurobindo \n D: Rabindranath Tagore \n",
  answer: "D"
}, {
  question: "What is national reptile of India? \n A: Python \n B: King Cobra \n C: Lizard \n D: Crocodile \n",
  answer: "B"
}, {
  question: "The Mumbai terrorist attack happened in which year? \n A: 2008 \n B: 2001 \n C: 2006 \n D: 2005 \n",
  answer: "A"
}]
for (var i = 0; i < arr.length; i++) {
  go(arr[i].question, arr[i].answer)
}

function go(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct Answer")
    score++
  } else {
    console.log("Wrong Answer")
  }
  if (score == 3) {
    console.log("----Level 1 Complete----")
  } else if (score == 7) {
    console.log("----Level 2 Complete----")
  }
  console.log("Current Score: ", score);
  console.log("-----------------------")
}

console.log("Your Score is " + score)
if (score < 7) {
  console.log("Nice Try " + userName + "!")
} else if (score == 10) {
  console.log("Brilliant " + userName + " !")
} else {
  console.log("Yay " + userName + "! You score is really good")
}

console.log("Highscore : 9 ----- By : Aayush")
console.log("You have made a new Highscore " + userName + "! Congratulations!")