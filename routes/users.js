var express = require('express');
var router = express.Router();
const tambolaService = require('../services/tambolaService');

const { log } = require("console");
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/generate-sets', async (req, res) => {
  const { sets } = req.body;
  try {
    const generatedSets = await tambolaService.generateTambolaSets(sets);
    res.json({ sets: generatedSets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get-tickets', async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  try {
    const fetchedTickets = await tambolaService.fetchTambolaTickets(page, pageSize);
    res.json({ tickets: fetchedTickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
