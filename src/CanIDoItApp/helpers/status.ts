import {indoor, outdoor} from './words';

export const classifyTask = (task: string) => {
  let outdoorScore: number = 0;
  let indoorScore: number = 0;

  const regex = /'s|[^\w\s]+/g;
  const wordsArray = task.replace(regex, '').split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    const word = wordsArray[i].toLowerCase();
    if (outdoor.includes(word)) {
      outdoorScore += 100;
    } else if (indoor.includes(word)) {
      indoorScore += 100;
    } else {
      outdoorScore += 50;
      indoorScore += 50;
    }
  }

  console.log(outdoorScore, indoorScore);
  console.log(outdoorScore / indoorScore);
};
