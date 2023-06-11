import { nanoid } from "nanoid";

export const makeArrayDaysWeather = (arr) => {
  const result = [];
  let arrDay = [];

  arr.forEach((e, i, a) => {
    const dateCurrent = e.dt_txt.split(" ")[0];
    const dateNext = a[i + 1] && a[i + 1].dt_txt.split(" ")[0];

    arrDay.push(e);

    if (dateCurrent !== dateNext) {
      const day = {
        id: nanoid(),
        weather: arrDay
      }
      result.push(day);
      arrDay = [];
    }
  });

  return result;

  }


