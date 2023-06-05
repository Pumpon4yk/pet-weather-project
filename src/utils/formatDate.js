import moment from 'moment-timezone';


export function formatDateDay(timezone) {

  const offsetInMinutes = timezone / 60 / 60;

  const currentDate = moment().utc().utcOffset(offsetInMinutes).format('DD:MM');

  return currentDate;
}

export function formatDateTime(timezone) {

  const offsetInMinutes = timezone / 60 / 60;

  const currentTime = moment().utc().utcOffset(offsetInMinutes).format('HH:mm:ss');

  return currentTime;
}

