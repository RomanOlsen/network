import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"

class ProfileService{
  async viewProfile(creatorID) {
    const response = await api.get(`api/profiles/${creatorID}`) // NOTE for some reason I cannot find api/profiles anywhere on codeworks sanadbox. I had to trust an old reference.
    logger.log(response.data)
    AppState.activeProfile = new Account(response.data)

  }
}
export const profileService = new ProfileService()