import Post from "../../Model/Posts.js";

const getposts = async (req, res) => {
  try {
    const { category } = req.query; // Retrieve the "category" parameter from the query string

    let posts;

    if (category) {
      // If category parameter is provided, filter the posts based on the category
      posts = await Post.find({ category: category });
    } else {
      // If no category parameter is provided, retrieve all posts
      posts = await Post.find({});
    }

    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ msg: "Error while getting data" });
  }
};

export { getposts };
