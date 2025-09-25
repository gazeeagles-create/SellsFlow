const express = require('express');
const router = express.Router();
const SessaoController = require('../controllers/SessaoController');

router.post('/', SessaoController.criarSessao);
router.get('/', SessaoController.listarSessoes);

module.exports = router;
