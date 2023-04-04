import axios from "axios";

export const baseUrl='https://youtube-v31.p.rapidapi.com'

const options = {
    
    
    params: {part: 'snippet', videoId: 'M7FIvfx5J10',maxResults: 200},
    headers: {
      'X-RapidAPI-Key': '8e2d8d2d6cmsh4f0eb5c84e5d494p15f91ejsnb95f85e44c21',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };




  export const fetchApi = async (url) =>{
     const { data }   = await axios.get(`${baseUrl}/${url}`,options)
      
        return data
  }