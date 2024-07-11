import prisma from "../db.js";

const getComments = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: { imageId: parseInt(id) },
    });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const postComments = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const existingComment = await prisma.comment.findFirst({
      where: { imageId: parseInt(id) },
    });

    let response;
    if (existingComment) {
      response = await prisma.comment.update({
        where: { id: existingComment.id },
        data: { content: comment },
      });
    } else {
      response = await prisma.comment.create({
        data: {
          content: comment,
          imageId: parseInt(id),
        },
      });
    }

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export { getComments, postComments };
