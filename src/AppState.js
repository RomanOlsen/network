import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  // /** @type {import('./models/Post.js').Post} user info from the database*/
  posts: [],
  page: 0, // have it stay 0 but then change once get request fires
  maxPage: 0,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  activeProfile: null,
  // profilePosts: []
})

