import prisma from "../db.js";

const getImages = async (req, res) => {
  try {
    try {
      const images = await prisma.image.findMany();

      const imagesWithUrl = images.map((image) => ({
        ...image,
        url: `http://localhost:8080${image.url}`,
      }));
      res.json(imagesWithUrl);
    } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).send("Internal Server Error");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
const postImages = async (req, res) => {
  try {
    const { filename } = req.file;
    const { originalname } = req.file;

    const image = await prisma.image.create({
      data: {
        url: `/uploads/${filename}`,
        name: originalname,
      },
    });

    res.status(201).json(image);
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { getImages, postImages };
