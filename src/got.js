import _ from 'underscore';

const got = [
  {
    "name": "💪",
    "audio": './sounds/hizdar.mp3',
  },
  {
    "name": "🌚",
    "audio": './sounds/grayscale.mp3',
  },
  {
    "name": "🔔",
    "audio": './sounds/bells.mp3',
  },
  {
    "name": "⚠️",
    "audio": './sounds/george.mp3',
  },
  {
    "name": "🛌",
    "audio": './sounds/tired.mp3',
  },
  {
    "name": "🙅",
    "audio": './sounds/nothing.mp3',
  },
  {
    "name": "🎭",
    "audio": './sounds/pentos.mp3',
  },
  {
    "name": "⌛️",
    "audio": './sounds/urgent.mp3',
  },
  {
    "name": "🍷",
    "audio": './sounds/wine.mp3',
  },
  {
    "name": "🐉",
    "audio": './sounds/dragon.mp3',
  },
  {
    "name": "⛓",
    "audio": './sounds/pycell.mp3',
  },
  {
    "name": "🗡",
    "audio": './sounds/stabbing.mp3',
  },
] 

export default _.shuffle(got);