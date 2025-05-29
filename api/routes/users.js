let express = require('express');
let router = express.Router();
let User = require('../model/users');

// Récupérer tous les utilisateurs
router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) return res.status(500).send(err);
        res.json(users);
    });
});

// Vérifier si un utilisateur existe avec le mot de passe
router.post('/login', async (req, res) => {
    const { user, password } = req.body;
    try {
        const foundUser = await User.findOne({ user, password });
        if (!foundUser) {
            return res.status(401).json({ message: 'Identifiants incorrects' });
        }
        res.json({ message: 'Connexion réussie', user: foundUser });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
