import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService{
  async search(query) {
    const response = await api.get(`api/posts?query=${query}`)
    logger.log(response.data)
      if (response.data.posts.length == 0) {
        throw new Error(`We can't find any posts matching ${query}!`) //'Please enter something else'
      }
      const posts = response.data.posts.map(pojo => new Post(pojo))
      AppState.posts = posts
      AppState.page = response.data.page
      AppState.maxPage = response.data.totalPages
    
  }
  async changeProfilePostPage(direction) {
    const amount = AppState.profilePagesShownPerPage
    if (direction == null) {
      direction = 0
    }
    AppState.page += direction
    console.log('pages', AppState.page);
    const skipAmount = (AppState.page * amount) - amount
    console.log('skip amount', skipAmount);
    
    // const currentShown = AppState.posts[skipAmount]
    // const currentShown2 = AppState.posts[skipAmount + 1]
    // const currentShown3 = AppState.posts[skipAmount + 2]
    // const currentShown4 = AppState.posts[skipAmount + 3]
    // const currentShown5 = AppState.posts[skipAmount + 4]

    // console.log(currentShown, currentShown2, currentShown3, currentShown4, currentShown5);


AppState.profilePostPageContent = []
    for (let index = skipAmount; index < (skipAmount+amount); index++) {
      if (AppState.posts[index] == undefined) { // ANCHOR all i had to do was move this before NewCard const....took me like 40mins to see
        return
      }
      const newCard = AppState.profilePostPageContent.push(AppState.posts[index])
      // console.log(newCard);
      console.log(index)
      
      
    }

// ANCHOR seperate method from first forloop AppState.profilePostPageContent.push(AppState.posts[skipAmount + 1])




    logger.log(AppState.profilePostPageContent)

  }
  
  async getProfilePosts(id) {
    const response = await api.get(`api/posts?creatorId=${id}`) // ANCHOR use account path not posts! NVM
    // console.log('basic',response);
    // console.log(id);
    // console.log(response.data.totalPages);

    // const pageTotal = response.data.totalPages
    AppState.posts = response.data.posts.map(p => new Post(p))
    AppState.page = response.data.page
    AppState.maxPage = response.data.totalPages



    // ANCHOR felt like a genius!
    // for (let page = 1; page <= pageTotal; page++) {
    //   const response = await api.get(`api/posts?page=${page}`)

    //   logger.log('im a for loop',response.data);
      
    //    const posts = response.data.posts.map(pojo => new Post(pojo))
    //   AppState.posts.push(...posts)

    //   // AppState.posts.
    //   // AppState.posts.
    // }
// console.log('This should be ALL posts', AppState.posts);


  //  const profilePosts = AppState.posts.filter((element) => element.creatorId == id)
  //  AppState.posts = profilePosts
  //  console.log('profile posts', profilePosts);

// AppState.page = 1
// const newPageCount =   Math.ceil(AppState.posts.length / 5) // 5 per profile page page
// AppState.maxPage = newPageCount



  // logger.log('total pages here is ', newPageCount) 
  
// this.changeProfilePostPage()

  }
async changePostPage(direction) {

  const response = await api.get(`api/posts?page=${AppState.page + direction}`)
  // The 3 golden lines of code where the magic happens ✨
  const posts = response.data.posts.map(pojo => new Post(pojo))
  AppState.posts = posts
  AppState.page = response.data.page
  // console.log(response.data);
  
  }
  async deletePost(postID) {
    await api.delete(`api/posts/${postID}`) // const response unneeded here
    const postIndex = AppState.posts.findIndex(post => post.id == postID)
    AppState.posts.splice(postIndex, 1)

    // Deletes it from profile post content array if there is one
    const profilePostIndex = AppState.profilePostPageContent.findIndex(post => post.id == postID)
    AppState.profilePostPageContent.splice(profilePostIndex, 1)
  }
  async getPosts(){
    const response = await api.get('api/posts')
    logger.log(response.data)
    const posts = response.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
    AppState.page = response.data.page
    AppState.maxPage = response.data.totalPages
  }
  
  async likePost(postID){
    const response = await api.post(`api/posts/${postID}/like`)
    logger.log(response.data)
    const postIndex = AppState.posts.findIndex(post => post.id == postID)
    AppState.posts.splice(postIndex, 1, new Post(response.data))
    AppState.profilePostPageContent.splice(postIndex, 1, new Post(response.data)) // updates it from profile page!!!

    // Another get request?
    // const response2 = await api.get(`api/posts/${postID}`) 
    // AppState.posts.findIndex(post => post.id == postID).Likes = response.data
    

    // AppState.posts.
  }
  async postPost(value) {
    const response = await api.post(`api/posts`, value)
    AppState.posts.unshift(new Post(response.data))
    this.getPosts()
     // TODO find a way to push it to the very top
    // NOTE unshift will push to front and push does to back of array
  }

}

export const postsService = new PostsService()