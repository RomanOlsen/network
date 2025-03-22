export class Post{
  constructor(data){
    this.body = data.body
    this.ImgUrl = data.imgUrl
    this.CreatorId = data.creatorId
    this.LikeIds = data.LikeIds
    this.Creator = data.creator // Virtual
    this.Likes = data.likes
    this.id = data.id
    // this.likeCount = data.likes

    this.createdAt = new Date(data.createdAt)




  }
}