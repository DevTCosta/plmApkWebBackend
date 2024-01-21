const express = require('express');
const cors = require('cors');
const mensagemRoute = require('./src/routes/mensagem');
const videoRoute = require('./src/routes/videos');
const playVideo = require('./src/routes/playVideosRoute');

const app = express();

// Aplica o CORS globalmente para todas as rotas
app.use(cors());

// Use a rota específicax
app.use('/api/mensagem', mensagemRoute);
app.use('/api/videos', videoRoute);
app.use('/api/play-video', playVideo);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});