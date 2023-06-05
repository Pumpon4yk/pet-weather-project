import moment from 'moment-timezone';
import SunCalc from "suncalc";

// const SunCalc = require("suncalc");


export function formatDateDay(dateStr) {
  const date = new Date(dateStr * 1000);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');

  return `${day}.${month}`;
}

export function formatDateTime(timezone) {
  const offsetInMinutes = timezone / 60 / 60;
  const currentTime = moment().utcOffset(offsetInMinutes).format('HH:mm:ss');

  return currentTime;
}

