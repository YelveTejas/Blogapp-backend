import Post from "../../Model/Posts.js";

const getpostbyId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.send(post)
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
export { getpostbyId };
