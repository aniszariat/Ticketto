const News = require ("../models/news")


exports.createNewsPost = async (req, res) => {
  let new_newsPost = new News({
   NewsCreator: req.body.NewsCreator,
   TitleNewsPost:req.body.TitleNewsPost,
   DateNews:req.body.DateNews,
   NewsObject:req.body.NewsObject,
   NewsBodyPost:req.body.NewsBodyPost,
    PosterNews: `${req.protocol}://${req.get("host")}/images/newsImg/${
      req.file.filename
    }`,
  });
  try {
    new_newsPost = await new_newsPost.save();
    res
      .status(201)
      .json({ message: "successfully created Post !", news: new_newsPost._doc });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.updateNewsPost = async (req, res) => {
  News.findById(req.params.id)
    .then((news) => {
      if (news.NewsCreator != req.auth.userId) {
        res.status(403).json({ message: "Not Allowed !" });
      } else {
        const updates = req.file
          ? {
              ...req.body,
              PosterNews: `${req.protocol}://${req.get("host")}/images/newsImg/${req.file.filename}`,
            }
          : { ...req.body };
          News.findByIdAndUpdate(req.params.id, {
            ...updates,
            _id: req.params.id,
          })
            .then((updatednews) =>
              res.status(201).json({ message: "Succefully updated Post !"}))
      }
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteNewsPost = (req, res) => {
  News.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Successfully deleted!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllNews = (req, res) => {
  News.find()
    .then((News) => res.status(200).json(News))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAnewsPost = (req, res) => {
  News.findOne({ _id: req.params.id })
    .then((News) => res.status(200).json(News))
    .catch((error) => res.status(404).json({ error }));
};
