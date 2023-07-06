import Post from "../../Model/Posts.js"

const updatePost = async(req,res)=>{
try{
const post = await Post.findById(req.params.id);
if(!post){
    return res.status(404).json({msg:'Post Not Found'})
}
await Post.findByIdAndUpdate(req.params.id,{$set:req.body})
 return res.status(200).json({msg:"Post Updateed"})
}catch(err){
  
   console.log(err)
}
}

export {updatePost}