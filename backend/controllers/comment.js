const Comment = require ('../models/comment')

exports.createComment= async (req, res) => {
    let new_comment = new Comment(req.body);
    try {
      new_comment = await new_comment.save();
      res.status(201).json({message:"successfully created !", comment:new_comment._doc});
    } catch (error) {
      res.status(400).json({ error});
    }};
 
 exports.updateCommment = async (req, res) => {
    Comment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteComment = (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Successfully deleted!'}))
      .catch(error => res.status(400).json({ error}));
  };

  exports.findAllComment = (req, res )=> {
    Comment.find()
      .then(Comment => res.status(200).json(Comment))
      .catch(error => res.status(400).json({ error }));
  };

  exports.findaComment = (req, res) => {
    Comment.findOne({ _id: req.params.id })
      .then(Comment => res.status(200).json(Comment))
      .catch(error => res.status(404).json({ error }));
  };