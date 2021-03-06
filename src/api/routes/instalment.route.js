const express = require('express');
const router = express.Router();
const { create, update, get, deleteInstalment, query } = require('../controller/instalment.controller');


/**
 * GET request to /instalment/:id
 */
router.get('/:id', async(req, res, next) => {
    const instalment = await get(req.params.id);
    res.status(200).json(instalment);
});

/**
 * DELTE request to /instalment/:id
 */
router.delete('/:id', async(req, res, next) => {
    await deleteInstalment(req.params.id);
    res.status(200).json({});
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

router.post("/query", async(req, res, next) => {
    const instalments = await query(req.body)
    res.status(200).json(instalments);
});

module.exports = router;