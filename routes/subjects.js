let express = require('express');
let router = express.Router();
let subjects = require('../model/subjects');

// Récupérer toutes les matieres
router.get('/', (req, res) => {
    subjects.find((err, subjects) => {
        if (err) return res.status(500).send(err);
        res.json(subjects);
    });
});

module.exports = router;