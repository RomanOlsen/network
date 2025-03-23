import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService{
  async changeProfilePostPage(direction) {
    const amount = AppState.profilePagesShownPerPage
    AppState.page += direction
    console.log(AppState.page);
    const skipAmount = (AppState.page * amount) - amount
    console.log(skipAmount);
    
    // const currentShown = AppState.posts[skipAmount]
    // const currentShown2 = AppState.posts[skipAmount + 1]
    
    // console.log(currentShown, currentShown2);
AppState.profilePostPageContent = []
    for (let index = skipAmount; index < (skipAmount+amount); index++) {
      const newCard = AppState.profilePostPageContent.push(AppState.posts[index])
      console.log(newCard);
      
      // if (AppState.posts[index].value == null) {
      //   return
      // }
      
    }
    logger.log(AppState.profilePostPageContent)

  }
  
  async getProfilePosts(id) {
    const response = await api.get(`api/posts`) // ANCHOR use account path not posts! NVM
    // console.log('basic',response);
    // console.log(id);
    // console.log(response.data.totalPages);

    const pageTotal = response.data.totalPages




    // ANCHOR felt like a genius!
    for (let page = 1; page <= pageTotal; page++) {
      const response = await api.get(`api/posts?page=${page}`)

      logger.log('im a for loop',response.data);
      
       const posts = response.data.posts.map(pojo => new Post(pojo))
      AppState.posts.push(...posts)

      // AppState.posts.
      // AppState.posts.
    }
console.log('This should be ALL posts', AppState.posts);


   const profilePosts = AppState.posts.filter((element) => element.creatorId == id)
   AppState.posts = profilePosts
   console.log('profile posts', profilePosts);

AppState.page = 1
const newPageCount =   Math.ceil(AppState.posts.length / 5) // 5 per profile page page
AppState.maxPage = newPageCount



  logger.log(newPageCount) 
  

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

    // Another get request?
    // const response2 = await api.get(`api/posts/${postID}`) 
    // AppState.posts.findIndex(post => post.id == postID).Likes = response.data
    

    // AppState.posts.
  }
  async postPost(value) {
    const response = await api.post(`api/posts`, value)
    AppState.posts.push(new Post(response.data))
  }

}

export const postsService = new PostsService()