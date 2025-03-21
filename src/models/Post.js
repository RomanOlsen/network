export class Post{
  constructor(data){
    this.body = data.body
    this.ImgUrl = data.imgUrl
    this.CreatorId = data.CreatorId
    this.LikeIds = data.LikeIds
    this.Creator = data.creator // Virtual
    this.Likes = data.Likes
    this.id = data.id

    this.createdAt = new Date(data.createdAt)




  }
}