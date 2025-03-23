import { AppState } from "@/AppState.js"

class FormService{
  prefillForm() {
    const account = AppState.account
    if (account.name == null) {
      account.name = ''
    }
    if (account.bio == null) {
      account.bio = ''
    }
    if (account.coverImg == null) {
      account.coverImg = ''
    }
    if (account.class == null) {
      account.class = ''
    }
    if (account.github == null) {
      account.github = ''
    }
    if (account.graduated == null) {
      account.graduated = null
    }
    if (account.linkedin == null) {
      account.linkedin = ''
    }
    if (account.resume == null) {
      account.resume = ''
    }
    if (account.picture == null) {
      account.picture = ''
    }

  }

}

export const formService = new FormService()