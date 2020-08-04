const path = require('path');
const router = require('express').Router();

// gets the index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// gets animals.html file for <url>/animals fetch
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// gets zookeepers.html file for <url>/zookeepers fetch
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;