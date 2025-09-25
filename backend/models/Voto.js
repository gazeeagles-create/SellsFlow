const mongoose = require('mongoose');

const VotoSchema = new mongoose.Schema({
  sessaoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sessao', required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  opcao: { type: String, enum: ['sim', 'nao', 'abstencao'], required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Voto', VotoSchema);
