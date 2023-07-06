import Comment from "../../Model/Comment.js";

const Deletecomment = async (req,res) => {
    
  try {
    const post = await Comment.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    return res.status(200).json({ msg: "Comment deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({msg:"Error" });
  }
};

export { Deletecomment };
