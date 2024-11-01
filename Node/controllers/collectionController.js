const Collection = require('../models/Collection');

exports.getCollections = async (req, res) => {
  const collections = await Collection.findAll();
  res.json(collections);
};

exports.createCollection = async (req, res) => {
  const { date, route, materials, weight, vehicle, documents, createdBy } = req.body;

  if (!date || !route || !materials || !weight || !vehicle || !createdBy) {
    return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  try {
    const collection = await Collection.create({ date, route, materials, weight, vehicle, documents, createdBy });
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a coleta', details: error.message });
  }
};

exports.updateCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await Collection.update(req.body, { where: { id } });
    if (collection[0] === 0) {
      return res.status(404).json({ error: 'Coleta não encontrada' });
    }
    res.json({ message: 'Coleta atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a coleta', details: error.message });
  }
};

exports.deleteCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Collection.destroy({ where: { id } });
    if (result === 0) {
      return res.status(404).json({ error: 'Coleta não encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a coleta', details: error.message });
  }
};
