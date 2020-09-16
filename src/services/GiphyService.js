import axios from 'axios'
import { Gimage } from '../models/Gimage'

const APIKEY = 'search?api_key=YkfYj2Bzq3CFRVBWnDPtzlADeUXJlYAQ&limit=500&offset=0&rating=g&lang=en&q='

const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 8000,
})

class GiphyService {
  async getRandomGif(query) {
    let res = await giphyApi.get(''+APIKEY + query)
    let images = res.data.data
    let i = ~~(Math.random() * (images.length - 1))
    return new Gimage(images[i])
  }
}


export const giphyService = new GiphyService()
