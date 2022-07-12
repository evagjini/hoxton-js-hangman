
import './style.css'

type State = {
  word: string
  characters: string[]
  maxMistakes: number
  streak: number
}

const WORDS = [
  'abruptly',
  'absurd',
  'abyss',
  'affix',
  'askew',
  'avenue',
  'awkward',
  'axiom',
  'azure',
  'bagpipes',
  'bandwagon',
  'banjo',
  'bayou',
  'beekeeper',
  'bikini',
  'blitz',
  'blizzard',
  'boggle',
  'bookworm',
  'boxcar',
  'boxful',
  'buckaroo',
  'buffalo',
  'buffoon',
  'buxom',
  'buzzard',
  'buzzing',
  'buzzwords',
  'caliph',
  'cobweb',
  'cockiness',
  'croquet',
  'crypt',
  'curacao',
  'cycle',
]



function getRandomWord () {
  let randomIndex = Math.floor(Math.random() * WORDS.length)
  return WORDS[randomIndex]
}



let state: State = {
  word: getRandomWord(),
  characters: [],
  maxMistakes: 3,
  streak: 0
}


function getMistakes () {
  return state.characters.filter(char => !state.word.includes(char))
}

function getMistakeCount () {
  let mistakes = getMistakes()
  return mistakes.length
}
