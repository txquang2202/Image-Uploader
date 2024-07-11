import prisma from "../db.js";

const getComments = async (req, res) => {
  try {
    const { url } = req.body;
    const image = await prisma.image.create({ data: { url } });
    res.json(image);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
const postComments = async (req, res) => {
  try {
    const { text, imageId } = req.body;
    const comment = await prisma.comment.create({ data: { text, imageId } });
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
export { getComments, postComments };
