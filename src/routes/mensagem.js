const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensagem: 'Rota encontrada! Isso veio do servidor.' });
});

module.exports = router;