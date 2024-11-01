const Material = require('../models/Material');

exports.getMaterials = async (req, res) => {
  const materials = await Material.findAll();
  res.json(materials);
};

exports.createMaterial = async (req, res) => {
  const { type, subtype, value } = req.body;
  const material = await Material.create({ type, subtype, value });
  res.status(201).json(material);
};

exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  const material = await Material.update(req.body, { where: { id } });
  res.json(material);
};

exports.deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
      const result = await Material.destroy({ where: { id } });
      if (result === 0) {
          return res.status(404).json({ error: 'Material não encontrado' });
      }
      res.status(204).send();
  } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o material', details: error.message });
  }
};
