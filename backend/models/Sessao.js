const mongoose = require('mongoose');

const SessaoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
  data: { type: Date, required: true },
  status: { type: String, enum: ['aberta', 'fechada'], default: 'aberta' },
  votos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Voto' }],
  criadaEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sessao', SessaoSchema);
