require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const materialRoutes = require('./routes/materialRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/reports', reportRoutes); 

app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota não encontrada' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ocorreu um erro no servidor' });
});

module.exports = app;
