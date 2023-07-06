
const url = 'http://localhost:4400'
const uploadImage=async(req,res)=>{
if(!req.file){
  return res.status(404).json({msg:"File Not Found"})
}
const imageUrl = `${url}/file/${req.file.name}`
return res.status(200).json(imageUrl)
}

export {uploadImage}