import fs from 'fs';

let keyword = 'Ring';
let arr = [];
fs.readFile('./story.txt', 'utf-8', (error, data) => {
  if (error) console.log(error);
  else {
    arr = data.split('.');
    arr.forEach((sentence) => {
      if (sentence.includes(keyword)) console.log(sentence);
    });
  }
});
