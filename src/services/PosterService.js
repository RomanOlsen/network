import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Poster } from "@/models/Poster.js"

class PosterService{
  async getPosters(){
    const response = await api.get('api/ads')
    logger.log(response.data)
    const posters = response.data.map(pojo => new Poster(pojo))
    AppState.posters = posters
  }
}
export const posterService = new PosterService()