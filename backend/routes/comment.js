const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');


router.get('/',commentCtrl.findAllComment);
router.get('/:id',commentCtrl.findaComment);
router.post('/',commentCtrl.createComment);
router.put('/:id',commentCtrl.updateCommment);
router.delete('/:id',commentCtrl.deleteComment); 

module.exports = router;