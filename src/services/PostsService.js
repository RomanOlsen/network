import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService{
  async getPosts(){
    const response = await api.get('api/posts')
    logger.log(response.data)
    const posts = response.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
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

}

export const postsService = new PostsService()