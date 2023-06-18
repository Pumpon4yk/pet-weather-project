import SunCalc from "suncalc";


const iconDataDay =  {
  '800': 'http://vortex.accuweather.com/adc2010/images/slate/icons/01.svg',
  // '2': 'http://vortex.accuweather.com/adc2010/images/sl1ate/icons/02.svg',
  '801': 'http://vortex.accuweather.com/adc2010/images/slate/icons/03.svg',
  // '801': 'http://vortex.accuweather.com/adc2010/images/slate/1icons/03.svg',
  // '5': 'http://vortex.accuweather.com/adc2010/images/slate/icons/05.svg',
  // '801': 'http://vortex.accuweather.com/adc2010/images/slate/icons/06.svg',
  // '7': 'http://vortex.accuweather.com/adc2010/images/slate/icons/07.svg',
  '802': 'http://vortex.accuweather.com/adc2010/images/slate/icons/08.svg',
  '700': 'http://vortex.accuweather.com/adc2010/images/slate/icons/11.svg',
  '500': 'http://vortex.accuweather.com/adc2010/images/slate/icons/12.svg',
  // '500': 'http://vortex.accuweather.com/adc2010/images/slate/icons/13.svg',
  '300': 'http://vortex.accuweather.com/adc2010/images/slate/icons/14.svg',
  // '15': 'http://vortex.accuweather.com/adc2010/images/slate/icons/15.svg',
  '200': 'http://vortex.accuweather.com/adc2010/images/slate/icons/16.svg',
  // '17': 'http://vortex.accuweather.com/adc2010/images/slate/icons/17.svg',
  // '18': 'http://vortex.accuweather.com/adc2010/images/slate/icons/18.svg',
  '600': 'http://vortex.accuweather.com/adc2010/images/slate/icons/19.svg',
  // '20': 'http://vortex.accuweather.com/adc2010/images/slate/icons/20.svg',
  // '21': 'http://vortex.accuweather.com/adc2010/images/slate/icons/21.svg',
  // '22': 'http://vortex.accuweather.com/adc2010/images/slate/icons/22.svg',
  // '23': 'http://vortex.accuweather.com/adc2010/images/slate/icons/23.svg',
  // '24': 'http://vortex.accuweather.com/adc2010/images/slate/icons/24.svg',
  // '25': 'http://vortex.accuweather.com/adc2010/images/slate/icons/25.svg',
  // '26': 'http://vortex.accuweather.com/adc2010/images/slate/icons/26.svg',
  // '29': 'http://vortex.accuweather.com/adc2010/images/slate/icons/29.svg',
  // '33': 'http://vortex.accuweather.com/adc2010/images/slate/icons/33.svg',
  // '34': 'http://vortex.accuweather.com/adc2010/images/slate/icons/34.svg',
  // '35': 'http://vortex.accuweather.com/adc2010/images/slate/icons/35.svg',
  // '36': 'http://vortex.accuweather.com/adc2010/images/slate/icons/36.svg',
  // '37': 'http://vortex.accuweather.com/adc2010/images/slate/icons/37.svg',
  // '38': 'http://vortex.accuweather.com/adc2010/images/slate/icons/38.svg',
  // '39': 'http://vortex.accuweather.com/adc2010/images/slate/icons/39.svg',
  // '40': 'http://vortex.accuweather.com/adc2010/images/slate/icons/40.svg',
  // '41': 'http://vortex.accuweather.com/adc2010/images/slate/icons/41.svg',
  // '42': 'http://vortex.accuweather.com/adc2010/images/slate/icons/42.svg',
  // '43': 'http://vortex.accuweather.com/adc2010/images/slate/icons/43.svg',
  // '44': 'http://vortex.accuweather.com/adc2010/images/slate/icons/44.svg',  
  }

  const iconDataNight =  {
    '800': 'http://vortex.accuweather.com/adc2010/images/slate/icons/33.svg',
    '801': 'http://vortex.accuweather.com/adc2010/images/slate/icons/34.svg',
    '802': 'http://vortex.accuweather.com/adc2010/images/slate/icons/38.svg',
    '300': 'http://vortex.accuweather.com/adc2010/images/slate/icons/39.svg',
    '500': 'http://vortex.accuweather.com/adc2010/images/slate/icons/40.svg',
    '200': 'http://vortex.accuweather.com/adc2010/images/slate/icons/42.svg',
    '600': 'http://vortex.accuweather.com/adc2010/images/slate/icons/44.svg',  
    }

export const iconCreate = (num, loc) => {
  const {lat, lon} = loc;
  const date = new Date()

  const sunPosition = SunCalc.getPosition(date, lat, lon);
const isDay = sunPosition.altitude > 0;

if (isDay) {
  return getIcon(num, iconDataDay)
} else {
  return getIcon(num, iconDataNight)
}
};

export const iconCreateByHour = (num, date, loc) => {
  const {lat, lon} = loc;
  const dateNow = new Date(date)

  const sunPosition = SunCalc.getPosition(dateNow, lat, lon);
const isDay = sunPosition.altitude > 0;

if (isDay) {
  return getIcon(num, iconDataDay)
} else {
  return getIcon(num, iconDataNight)
}
};

export const findMostRepeatedNumber = (arr)=> {
  const iconNumber = arr.map(e => e.weather[0].id)

  const countMap = new Map();

  for (const number of iconNumber) {
    if (countMap.has(number)) {
      countMap.set(number, countMap.get(number) + 1);
    } else {
      countMap.set(number, 1);
    }
  }

  let mostRepeatedNumber;
  let maxCount = 0;

  for (const [number, count] of countMap.entries()) {
    if (count > maxCount) {
      mostRepeatedNumber = number;
      maxCount = count;
    }
  }

  return getIcon(mostRepeatedNumber, iconDataDay)
}

function getIcon(num, icon){
  if (num === 800) {
    return icon["800"];
  } else if (num === 801) {
    return icon["801"];
  } else if (num === 802 || num === 803 || num === 804) {
    return icon["802"];
  } else if (num >= 600) {
    return icon["600"];
  } else if (num >= 500) {
    return icon["500"];
  } else if (num >= 300) {
    return icon["300"];
  } else if (num >= 200) {
    return icon["200"];
  }
}