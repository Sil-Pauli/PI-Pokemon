const { Router } = require('express');
const { getApiType } = require('../controllers/typeController');

const router = Router();

router.get('/', async (req, res) => {
  const types = await getApiType();
  res.send(types);
});

module.exports = router;