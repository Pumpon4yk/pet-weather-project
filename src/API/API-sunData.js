import axios from "axios"

export const sunData = async(date,loc) => {
  const {lat, lon} = loc;
  const dateString = date.split(" ")[0]

  const uri = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${dateString}&formatted=0`;

  const res = await axios(uri)
  return res.data
}