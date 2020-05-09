const express = require('express');
const router = express.Router();
const { getChits, getChitsByUser, create: createChit, update: updateChit, get: getChitById, query, deleteChit } = require('../controller/chit.controller');

/**
 * GET request to /chit
 */
router.get('/', async(req, res, next) => {
    const chits = await getChits();
    res.status(200).json(chits);
});

/**
 * GET request to /chit/:id
 */
router.get('/:id', async(req, res, next) => {
    const chit = await getChitById(req.params.id);
    res.status(200).json(chit);
});

/**
 * GET request to /chit/:id
 */
router.get('/user/:userId', async(req, res, next) => {
    const chits = await getChitsByUser(req.params.userId);
    res.status(200).json(chits);
});

/**
 * POST request to /chit
 */
router.post("/", async(req, res, next) => {
    const chit = await createChit(req.body)
    res.status(201).json(chit);
});

/**
 * PUT request to /chit
 */
router.put("/", async(req, res, next) => {
    const chit = await updateChit(req.body)
    res.status(201).json(chit);
});

router.post("/query", async(req, res, next) => {
    const chits = await query(req.body)
    res.status(200).json(chits);
});

router.delete('/:id', async(req, res, next) => {
    const chit = await deleteChit(req.params.id);
    res.status(200).json(chit);
});

module.exports = router;