import _ from 'underscore';

// const randomInt = Math.floor(Math.random() * 4) + 1;
const randomInt = 4;
const data = [
  {
    "name": "👋 ",
    "audio": './sounds/hellooooooo.mp3',
  },
  {
    "name": "🤦‍♂️",
    "audio": './sounds/toughlook.mp3',
  },
  {
    "name": "💸 ",
    "audio": './sounds/money.mp3',
  },
  {
    "name": "🔥 ",
    "audio": './sounds/seamus.mp3',
  },
  {
    "name": "😲",
    "audio": './sounds/ohwow.mp3',
  },
  {
    "name": "🏆 ",
    "audio": './sounds/mcgalleon.mp3',
  },
  {
    "name": "🚨",
    "audio": './sounds/warning.mp3',
  },
  {
    "name": "💻 ",
    "audio": './sounds/whatagreatwebsite.mp3',
  },
  {
    "name": "👶 ",
    "audio": `./sounds/fluer${randomInt}.mp3`,
  },
  {
    "name": "🦉 ",
    "audio": './sounds/protecthedwig.mp3',
  },
  {
    "name": "💰 ",
    "audio": './sounds/ludoliteral.mp3',
  },
  {
    "name": "🇫🇷",
    "audio": './sounds/beauxbatons.mp3',
  },
  {
    "name": "🙇 ",
    "audio": './sounds/deepcanon.mp3',
  },
  {
    "name": "🍆",
    "audio": './sounds/vik.mp3',
  },
  {
    "name": "👬 ",
    "audio": './sounds/mygoodfriendtom.mp3',
  },
  {
    "name": "🏰 ",
    "audio": './sounds/nosaferplace.mp3',
  },
  {
    "name": "😽",
    "audio": './sounds/supfiggy.mp3', 
  }
  // {
  //   "name": "🍺"",
  //   "audio": './sounds/holdtrue.mp3',
  // },
  // {
  //   "name": "🚨 ",
  //   "audio": './sounds/spoilerwarning.mp3',
  // },
] 

export default _.shuffle(data);