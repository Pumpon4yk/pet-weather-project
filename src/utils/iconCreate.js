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

export default function iconCreate(num, date, loc){
  const {lat, lon} = loc;

  const sunPosition = SunCalc.getPosition(date, lat, lon);
const isDay = sunPosition.altitude > 0;

if (isDay) {
  return getIcon(num, iconDataDay)
} else {
  return getIcon(num, iconDataNight)
}
}

function getIcon(num, icon){
  switch (num){
    case 800:
      return icon["800"];
    case 801:
      return icon["801"];
    case 802:
    case 803:
      return icon["802"];
    case num > 500:
      return icon["600"];
    case num > 300:
      return icon["500"];
    case num > 200:
      return icon["300"];
    case num > 100:
      return icon["200"];
  }
}