import Post from "../../Model/Posts.js"

const deletePost = async(req,res)=>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
          return res.status(404).json({ msg: 'Post not found' });
        }
    
        return res.status(200).json({ msg: 'Post deleted successfully' });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
      }
}

export {deletePost}