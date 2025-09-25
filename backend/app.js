const express = require('express');
const app = express();
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const sessaoRoutes = require('./routes/sessoes');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/sessoes', sessaoRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

// Socket.IO para votações em tempo real
const io = require('socket.io')(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id);

  socket.on('votar', (data) => {
    io.emit('votoRegistrado', data); // Transmite o voto para todos conectados
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});
