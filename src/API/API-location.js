import axios from "axios"

const API_KEY_LOCATION  ="4be380faed94440dba6325e0ba149b67";
const BASE_URL = 'https://api.geoapify.com/v1/geocode'



export const getCitysLocations = async (text) => {
  const resp = await axios(`${BASE_URL}/autocomplete?text=${text}&apiKey=${API_KEY_LOCATION}`);

  return resp.data
}

