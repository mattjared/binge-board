import _ from 'underscore';

const data = [
  {
    "name": "👋 ",
    "audio": "./sounds/hellooooooo.mp",
    "boardType": "potter"
  },
  {
    "name": "🤦‍♂️",
    "audio": "./sounds/toughlook.mp",
    "boardType": "potter"
  },
  {
    "name": "👪",
    "audio": "./sounds/seamus.mp",
    "boardType": "potter"
  },
  {
    "name": "🍺",
    "audio": "./sounds/ohwow.mp",
    "boardType": "potter"
  },
  {
    "name": "🏆 ",
    "audio": "./sounds/mcgalleon.mp",
    "boardType": "potter"
  },
  {
    "name": "🚨",
    "audio": "./sounds/warning.mp",
    "boardType": "potter"
  },
  {
    "name": "💻 ",
    "audio": "./sounds/whatagreatwebsite.mp",
    "boardType": "potter"
  },
  {
    "name": "👶 ",
    "audio": "./sounds/fluer4.mp",
    "boardType": "potter"
  },
  {
    "name": "🦉 ",
    "audio": "./sounds/protecthedwig.mp",
    "boardType": "potter"
  },
  {
    "name": "💰 ",
    "audio": "./sounds/ludoliteral.mp",
    "boardType": "potter"
  },
  {
    "name": "🇫🇷",
    "audio": "./sounds/beauxbatons.mp",
    "boardType": "potter"
  },
  {
    "name": "🍆",
    "audio": "./sounds/vik.mp",
    "boardType": "potter"
  },
  {
    "name": "👬 ",
    "audio": "./sounds/mygoodfriendtom.mp",
    "boardType": "potter"
  },
  {
    "name": "🏰 ",
    "audio": "./sounds/nosaferplace.mp",
    "boardType": "potter"
  },
  {
    "name": "😽",
    "audio": "./sounds/supfiggy.mp3", 
    "boardType": "potter"
  },
  {
    "name": "🔮",
    "audio": "./sounds/deep.mp3", 
    "boardType": "potter"
  },
  {
    "name": "🛑",
    "audio": "./sounds/nosaferplace.mp",
    "boardType": "thrones"
  },
  {
    "name": "🛑",
    "audio": "./sounds/supfiggy.mp3", 
    "boardType": "thrones"
  },
  {
    "name": "🛑",
    "audio": "./sounds/deep.mp3", 
    "boardType": "thrones"
  }
] 

export default _.shuffle(data);