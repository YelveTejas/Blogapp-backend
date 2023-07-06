import grid from "gridfs-stream";
import mongoose from "mongoose";
const connec = mongoose.connection;
let gfs, gridfsBucket;
connec.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(connec.db, {
    bucketName: "fs",
  });
  gfs = grid(connec.db, mongoose.mongo);
  gfs.collection("fs");
});
const getImage = async (req, res) => {
  try {
    await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export { getImage };
