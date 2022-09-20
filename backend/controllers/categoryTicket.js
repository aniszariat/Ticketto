const CategoryTicket = require('../models/categoryTicket');



        exports.createCategoryTicket= async (req, res) => {
        let new_categoryTicket = new CategoryTicket(req.body);
        try {
          new_categoryTicket = await new_categoryTicket.save();
          res.status(201).json({message:"successfully created Category !", CategoryTicket:new_categoryTicket._doc});
        } catch (error) {
          res.status(400).json({ error });
        }};


        exports.updateCategoryTicket = async (req, res) => {
          CategoryTicket.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet modifié !'}))
            .catch(error => res.status(400).json({ error }));
        };

        exports.deleteCategoryTicket = (req, res) => {
          CategoryTicket.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Successfully deleted!'}))
            .catch(error => res.status(400).json({ error }));
        };
  

        exports.findAllcategoriesTicket = (req, res )=> {
          CategoryTicket.find()
            .then(CategoryTicket => res.status(200).json(CategoryTicket))
            .catch(error => res.status(400).json({ error }));
        };


       exports.findCategoryTicket = (req, res) => {
          CategoryTicket.findOne({ _id: req.params.id })
            .then(CategoryTicket => res.status(200).json(CategoryTicket))
            .catch(error => res.status(404).json({ error }));
        };