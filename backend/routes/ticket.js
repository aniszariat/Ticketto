const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ticketsCtrl = require('../controllers/ticket');

  router.post('/',ticketsCtrl.createTicket);
  router.put('/:id', ticketsCtrl.updateTicket);
  router.delete('/:id',ticketsCtrl.deleteTicket);
  router.get('/',ticketsCtrl.findAllTickets);
  router.get('/:id',ticketsCtrl.findATicket);
 
//le middleware d'authentification pour sécuriser les routes dans les API. De cette façon, seules les requêtes authentifiées seront gérées.

  /* router.post('/',auth,ticketsCtrl.createTicket);
  router.put('/:id',auth, ticketsCtrl.updateTicket);
  router.delete('/:id',auth,ticketsCtrl.deleteTicket);
  router.get('/',auth,ticketsCtrl.findAllTickets);
  router.get('/:id',auth,ticketsCtrl.findATicket); */

module.exports = router;