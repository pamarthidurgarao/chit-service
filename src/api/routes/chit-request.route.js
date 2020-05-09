const express = require('express');
const router = express.Router();
const { create, deleteRequest, query, requestAction } = require('../controller/chit-request.controller');
/**
 * DELETE request to /:id
 */
router.delete('/:id', async(req, res, next) => {
    await deleteRequest(req.params.id);
    res.status(200).json({});
});

/**
 * POST request to /query
 */
router.post('/query', async(req, res, next) => {
    const requests = await query(req.body);
    res.status(200).json(requests);
});

/**
 * POST request to /Chit
 */
router.post("/", async(req, res, next) => {
    const request = await create(req.body)
    res.status(201).json(request)
});

router.post('/action/:id', async(req, res, next) => {
    await requestAction(req.params.id, req.query.status);
    res.status(200).json({});
});
module.exports = router;