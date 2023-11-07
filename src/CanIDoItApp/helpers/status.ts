import {indoor} from '../constants/indoorWords';
import {outdoor} from '../constants/outdoorWords';
import {badWeather, moderateWeather} from '../constants/weatherCondtions';

const classifyTask = (task: string): number => {
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
    }
  }

  // return the ratio between outdoor and indoor
  // if the ratio is less than 1, then it is indoor, otherwise outdoor
  return outdoorScore / indoorScore;
};

export const getStatus = (task: string, weather: string): string => {
  const outdoorIndoorRatio = classifyTask(task);

  const weatherCondition: string = badWeather.includes(weather)
    ? 'BAD'
    : moderateWeather.includes(weather)
    ? 'MODERATE'
    : 'GOOD';

  if (Number.isNaN(outdoorIndoorRatio) || outdoorIndoorRatio === 1) {
    return 'Maybe?';
  } else if (outdoorIndoorRatio >= 1) {
    switch (weatherCondition) {
      case 'BAD':
        return 'Impossible!';
      case 'GOOD':
        return 'Possible.';
      case 'MODERATE':
      default:
        return 'Maybe?';
    }
  } else {
    return 'Possible.';
  }
};
