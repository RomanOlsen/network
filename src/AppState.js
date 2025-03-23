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
  profilePostPageContent: [], // NOTE all profile's post are stored is posts but this is for specific pages
  profilePagesShownPerPage: 5,

  posters: [], // ads

  quote: ['The secret of staying young is to live honestly, eat slowly, and lie about your age.', 'They say that God is everywhere, and yet we always think of Him as somewhat of a recluse.', 'Dealing with network executives is like being nibbled to death by ducks.', 'Life is a moderately good play with a badly written third act.', `If you don't accept responsibility for your own actions, then you are forever chained to a position of defense.`, `Even on the most exalted throne in the world we are only sitting on our own bottom.`, 'Rich gifts wax poor when givers prove unkind.', 'If my hands are fully occupied in holding on to something, I can neither give nor receive.',  ]


})
