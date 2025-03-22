export class Post{
  constructor(data){
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator // Virtual
    this.likes = data.likes
    this.id = data.id
    // this.likeCount = data.likes

    this.createdAt = new Date(data.createdAt)




  }
}