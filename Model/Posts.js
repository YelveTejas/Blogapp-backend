import mongoose from "mongoose";
const PostSchema = mongoose.Schema({
   title:{
    type:String,
    required:true,
    
   },
   username: {
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
createDate:{
    type:Date
}
})
const Post  = mongoose.model('posts',PostSchema)

export default Post