export class Post{
  constructor(data){
    this.body = data.body
    this.ImgUrl = data.ImgUrl
    this.CreatorId = data.CreatorId
    this.LikeIds = data.LikeIds
    this.Creator = data.Creator // Virtual
    this.Likes = data.Likes
    this.id = data.id




  }
}