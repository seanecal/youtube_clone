import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    // 'X-RapidAPI-Key':'9eb28cb916msh7b08aefeda25b3bp18767bjsn68b11818f905',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function fetchFromAPI(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
