import Post from "../../Model/Posts.js"


const createpost=async(req,res)=>{
    try{
        const NewPost =  await new Post(req.body)
        NewPost.save()
    
        return res.status(200).json("Posted Successfully")
      
    }catch(err){
     return res.status(500).json(err)
    } 
 
}

export {createpost}