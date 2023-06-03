import axios from "axios";

const getCapital = async () => {
  const resp = await axios('https://ipapi.co/json/')
  const capital = resp.data.country_capital

  return capital
}

export default getCapital