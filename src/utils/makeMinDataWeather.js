import { minTempDay, maxTempDay } from './tempDay';
import { findMostRepeatedNumber } from './iconCreate';
import { getDayInWeek } from './getDayInWeek.js';

export const makeMinDataWeather = arr => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const arrDay = arr[i].weather;
    const date = arr[i].weather[0].dt_txt
      .split(' ')[0]
      .split('-')
      .slice(1)
      .reverse()
      .join('.');
    const day = getDayInWeek(arr[i].weather[0].dt_txt);

    const newObj = {
      id: arr[i].id,
      date,
      day,
      min: minTempDay(arrDay),
      max: maxTempDay(arrDay),
      icon: findMostRepeatedNumber(arrDay),
    };

    newArray.push(newObj);
  }
  return newArray;
};
