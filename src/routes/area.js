const express = require('express');
const {checkToken} = require('../middleware/origins')

const router = express.Router();
const {listAreas, postArea, getArea, putArea} = require('../controller/area')

router.get("", listAreas);
router.post("", checkToken, postArea);
router.get("/:id", getArea);
router.put("/:id", checkToken, putArea);


module.exports =  router;