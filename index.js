const express = require('express');
const cors = require('cors');
const mensagemRoute = require('./src/routes/mensagem');
const videoRoute = require('./src/routes/videos');

const app = express();

// Aplica o CORS globalmente para todas as rotas
app.use(cors());

// Use a rota específica
app.use('/api/mensagem', mensagemRoute);
app.use('/api/videos', videoRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});