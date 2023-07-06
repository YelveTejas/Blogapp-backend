import Comment from "../../Model/Comment.js"

const GetAllComments = async(req,res)=>{
 try{
const Comments = await Comment.find({postid:req.params.id})
res.status(200).json(Comments)
 }catch(err){
  console.log(err)
  res.status(400).json({msg:'Error While Getting Comments'})
 }
}


export {GetAllComments}