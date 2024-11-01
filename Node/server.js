require('dotenv').config();
const request = require('supertest');
const app = require('./app');

const sequelize = require('./config/database');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
    process.exit(1);
  });

