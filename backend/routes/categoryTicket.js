const express = require ('express')
const router  = express.Router();
const auth = require ('../middleware/auth');
const categoryTicketCtrl = require ('../controllers/categoryTicket');

//le middleware d'authentification pour sécuriser les routes dans les API. De cette façon, seules les requêtes authentifiées seront gérées.
//!ADMIN AUTHORITY
router.post('/',/* auth, */categoryTicketCtrl.createCategoryTicket);
router.put('/:id',auth,categoryTicketCtrl.updateCategoryTicket);
router.delete('/:id',auth,categoryTicketCtrl.deleteCategoryTicket);

router.get('/',categoryTicketCtrl.findAllcategoriesTicket);
router.get('/:id',categoryTicketCtrl.findCategoryTicket); 

/*
router.get('/',auth,categoryTicketCtrl.findAllcategoriesTicket);
router.get('/:id',auth,categoryTicketCtrl.findCategoryTicket); 
*/



module.exports = router;