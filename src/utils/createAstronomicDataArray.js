import moment from 'moment-timezone';

export const createAstronomicDataArray = (obj, timezone) => {
  const keys = Object.keys(obj)
  const astronomicNewObj = {}
  const zone  = timezone / 60 / 60;
    
    for(let key in obj){
      if(key === "day_length"){
        const num = obj[key] / 60 / 60
        astronomicNewObj[key] = num.toFixed(2).replace(/\./g, ":");
      }else{
        astronomicNewObj[key] = moment(obj[key]).utcOffset(zone).format('HH:mm:ss')
      }
    }
    
  return {astronomicNewObj, keys}
}