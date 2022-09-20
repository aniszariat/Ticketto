const express = require("express");
const router = express.Router();
const newsCtrl = require("../controllers/news");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config-news")

router.get("/", newsCtrl.findAllNews);
router.get("/:id", newsCtrl.findAnewsPost);
//** only registred users can create Posts */
router.post("/",auth, multer,newsCtrl.createNewsPost);
//** only ADMIN and the registred CREATOR of the post can modify it  */
router.put("/:id", auth, multer, newsCtrl.updateNewsPost);
//** only ADMIN the registred CREATOR user of the event can modify it  */
router.delete("/:id", newsCtrl.deleteNewsPost);

module.exports = router;
