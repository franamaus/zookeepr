const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');
const router = require('express').Router();

// gets json data of animals searched using query
router.get('/animals', (req, res) => {
    //res.send('Hello!');
    let results = animals;
    console.log(req.query)
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results); // check http://localhost:3001/api/animals to see object
})

// gets json data of animals searched using params (which takes ids)
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
        res.send(404);
    }
});

// add data to /api/animals when the client requests server to take in new info
router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
    // add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    res.json(req.body);
    }
})

module.exports  = router;