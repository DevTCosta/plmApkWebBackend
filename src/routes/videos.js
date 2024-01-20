// videos.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/lista-de-videos', (req, res) => {
  const videosPath = path.join(__dirname, '../videos'); //

  try {
    const arquivos = fs.readdirSync(videosPath);
    const videos = arquivos.filter((arquivo) => arquivo.endsWith('.mp4')); //extensão desejada

    // Mapeie a lista de vídeos para um array de objetos com informações adicionais, como tamanho e data de criação
    const videosInfo = videos.map((video) => {
      const videoPath = path.join(videosPath, video);
      const stats = fs.statSync(videoPath);

      return {
        nome: video,
      };
    });

    res.json({ videos: videosInfo });
  } catch (error) {
    console.error('Erro ao obter informações dos vídeos:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
