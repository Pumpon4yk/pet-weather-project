export const minTempDay = (array) => {
  const arrayTemp = array.map(e => Math.round(e.main.temp))
  const temp =  Math.min(...arrayTemp)
  return temp > 0 ? `+${temp}` : temp < 0 ? `-${temp}` : temp;
}

export const maxTempDay = (array) => {
  const arrayTemp = array.map(e => Math.round(e.main.temp))
  const temp =  Math.max(...arrayTemp)
  return temp > 0 ? `+${temp}` : temp < 0 ? `-${temp}` : temp;
}