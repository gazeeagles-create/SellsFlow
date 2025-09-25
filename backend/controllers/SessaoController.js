const Sessao = require('../models/Sessao');

exports.criarSessao = async (req, res) => {
  try {
    const sessao = new Sessao(req.body);
    await sessao.save();
    res.status(201).json(sessao);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar sessão' });
  }
};

exports.listarSessoes = async (req, res) => {
  try {
    const sessoes = await Sessao.find().populate('votos');
    res.json(sessoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar sessões' });
  }
};
