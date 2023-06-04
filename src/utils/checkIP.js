import axios from "axios";

const getCity = async () => {
  const resp = await axios('https://ipapi.co/json/')
  const city = resp.data.city || resp.data.country_capital;
  return city
}

export default getCity