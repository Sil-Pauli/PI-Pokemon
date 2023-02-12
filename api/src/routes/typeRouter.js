const { Router } = require('express');
const { Type } = require("../db");

const router = Router();

router.get("/", async(req, res, next) => {
    try {
        const allTypes = await Type.findAll();
        res.status(200).send(allTypes);
    } catch (error) {
        next(error)
    }
})

module.exports = router;