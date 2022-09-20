const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const categoryCtrl = require ('../controllers/category');
const multer = require("../middleware/multer-config-events")
 
//le middleware d'authentification pour sécuriser les routes dans les API. De cette façon, seules les requêtes authentifiées seront gérées.
//!ADMIN AUTHORITY
router.post('/',/* auth, */multer,categoryCtrl.createCategory);
router.put('/:id',/* auth, */multer,categoryCtrl.updateCategory);
router.delete('/:id',/* auth, */categoryCtrl.deleteCategory);


router.get('/',categoryCtrl.findAllcategories);
router.get('/:id',categoryCtrl.findCategory); 


module.exports = router;