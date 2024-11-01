// reportController.js
const Collection = require('../models/Collection');

exports.getCollectionReport = async (req, res) => {
  try {
    const collections = await Collection.findAll();
    const reportData = collections.map((collection) => ({
      date: collection.date,
      route: collection.route,
      weight: collection.weight,
      createdBy: collection.createdBy,
    }));
    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o relatório de coleta', details: error.message });
  }
};
