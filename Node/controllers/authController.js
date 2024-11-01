
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
  console.log("Requisição de registro recebida:", req.body);
  const { username, password, role } = req.body;
  if (!username)   {
    return res.status(400).json({ error: 'O username é obrigatória.' });
  }
  if (!password)   {
    return res.status(400).json({ error: 'A senha é obrigatória.' });
  }
  if (!role)   {
    return res.status(400).json({ error: 'A role é obrigatória.' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ where: { username } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Credenciais inválidas' });
      }
      
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log("Token gerado no login:", token); // Verifique se o token está gerado aqui
      
      res.json({ token });
  } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

