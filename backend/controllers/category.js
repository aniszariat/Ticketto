const Category = require('../models/category');


         exports.createCategory= async (req, res) => {
        let new_category = new Category({
          CategoryCreator:req.body.CategoryCreator,
          CategoryEvent: req.body.CategoryEvent,
          CategoryEventBg : `${req.protocol}://${req.get("host")}/images/categoryImg/${
             req.file.filename
           }`,
         });
        try {
          new_category = await new_category.save();
          res.status(201).json({message:"successfully created Category !", category:new_category._doc});
        } catch (error) {
          res.status(400).json({ error });
        }};


        exports.updateCategory = async (req, res) => {
          Category.findById(req.params.id)
          .then((category) => {
            if (category.CategoryCreator != req.auth.userId) {
              res.status(403).json({ message: "Not Allowed !" });
            } else {
              const updates = req.file
                ? {
                    ...req.body,
                    CategoryEventBg: `${req.protocol}://${req.get("host")}/images/categoryImg/${req.file.filename}`,
                  }
                : { ...req.body };
                Category.findByIdAndUpdate(req.params.id, {
                  ...updates,
                  _id: req.params.id,
                })
                  .then((updatedcategory) =>
                    res.status(201).json({ message: "Succefully updated Post !"}))
            }
          })
          .catch((error) => res.status(400).json({ error }));
        };//

        exports.deleteCategory = (req, res) => {
          Event.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Successfully deleted!'}))
            .catch(error => res.status(400).json({ error }));
        };
  

        exports.findAllcategories = (req, res )=> {
          Category.find()
            .then(Category => res.status(200).json(Category))
            .catch(error => res.status(400).json({ error }));
        };


       exports.findCategory = (req, res) => {
          Category.findOne({ _id: req.params.id })
            .then(Category => res.status(200).json(Category))
            .catch(error => res.status(404).json({ error }));
        };