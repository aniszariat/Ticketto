const multer = require("multer");
const MIME_TYPE = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jfif": "jfif",
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images/eventsImg");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPE[file.mimetype]
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("PosterEvent")
