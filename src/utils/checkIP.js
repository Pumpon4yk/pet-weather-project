import axios from "axios";

const getCity = async () => {
  const resp = await axios('https://ipapi.co/json/')
  const coord = {
    lat: resp.data.latitude,
    lon: resp.data.longitude}
  return coord
}

export default getCity