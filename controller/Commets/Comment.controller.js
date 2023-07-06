import Comment from "../../Model/Comment.js"




const comment= async(req,res)=>{
try{
const Newcomment =  await new Comment(req.body)
 Newcomment.save()
 res.status(200).json({msg:'Comment Saved Successfully'})
}catch(err){
    console.log(err)
  res.status(500).json({msg:err.message})
}
}

export{comment}