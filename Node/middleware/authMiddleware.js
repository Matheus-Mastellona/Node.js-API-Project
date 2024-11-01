const jwt = require('jsonwebtoken');
const User = require('../models/User');



module.exports.verifyToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log("Token recebido no middleware:", token); // Log para verificar o token recebido

    if (!token) {
        return res.status(403).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(403).json({ error: 'Usuário não encontrado' });
        }

        req.user = user; // Certifique-se de definir `req.user` para acesso ao role
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};




module.exports.verifyRole = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ error: 'Permissão negada' });
        }
        next();
    };
};

