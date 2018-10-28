import _ from 'underscore';

const randomInt = Math.floor(Math.random() * 3) + 1;
const data = [
  {
    "name": "Hellooooooo",
    "audio": './sounds/hellooooooo.mp3',
  },
  {
    "name": "Tough look for my guy",
    "audio": './sounds/cardinal.mp3',
  },
  {
    "name": "💸  MONEY",
    "audio": './sounds/money.mp3',
  },
  {
    "name": "🔥 Seamus",
    "audio": './sounds/seamus.mp3',
  },
  {
    "name": "Oh. Wow!",
    "audio": './sounds/ohwow.mp3',
  },
  {
    "name": "🚨 Spoiler Warning",
    "audio": './sounds/spoilerwarning.mp3',
  },
  {
    "name": "💰 McGalleon Needs Her Fix",
    "audio": './sounds/mcgalleon.mp3',
  },
  {
    "name": "🛑 Warning!",
    "audio": './sounds/warning.mp3',
  },
  {
    "name": "What a great website",
    "audio": './sounds/whatagreatwebsite.mp3',
  },
  {
    "name": "👶 Fluer",
    "audio": `./sounds/fluer${randomInt}.mp3`,
  },
  {
    "name": "🦉 Protect Hedwig",
    "audio": './sounds/protecthedwig.mp3',
  },
  {
    "name": "🍺",
    "audio": './sounds/holdtrue.mp3',
  },
  {
    "name": "Ludo 'Literal Bag Man' Bagman",
    "audio": './sounds/ludoliteral.mp3',
  },
] 

export default _.shuffle(data);