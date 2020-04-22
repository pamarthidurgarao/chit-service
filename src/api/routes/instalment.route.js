const express = require('express');
const router = express.Router();
const { create, update, get } = require('../controller/instalment.controller');


/**
 * GET request to /instalment/:id
 */
router.get('/:id', async(req, res, next) => {
    const instalment = await get(req.params.id);
    res.status(200).json(instalment);
});

/**
 * POST request to /instalment
 */
router.post("/", async(req, res, next) => {
    const instalment = await create(req.body)
    res.status(201).json(instalment);
});

/**
 * PUT request to /instalment
 */
router.put("/", async(req, res, next) => {
    const instalment = await update(req.body)
    res.status(201).json(instalment);
});

module.exports = router;