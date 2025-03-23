export class Account {
  /**
   * @typedef AccountData
   * @property {string} id
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} bio
   * @property {string} class
   * @property {string} coverImg
   * @property {string} resume
   * @property {string} linkedin
   * @property {string} github
   * @property {boolean} graduated
   * @property {any} createdAt
   *    * @property {any} updatedAt


   * @param {AccountData} data
   */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.class = data.class
    this.coverImg = data.coverImg
    this.resume = data.resume
    this.linkedin = data.linkedin
    this.github = data.github
    this.graduated = data.graduated
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}
