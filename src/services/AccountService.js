import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateAccount(data){

      if (data.name == '') {
        data.name = AppState.account.name
      }

      if (data.coverImg == '') {
        data.coverImg = 'https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
      }
      // if (data.graduated == '') {
      //   data.graduated = AppState.account.graduated
      // }
      // if (data.bio == '') {
      //   data.bio = AppState.account.bio
      // }
      const response = await api.put(`/account`, data)
      AppState.account = new Account(response.data)
       AppState.activeProfile = new Account(response.data)
      logger.log(response.data);


    
  }

}

export const accountService = new AccountService()
