const express = require('express');
const router = express.Router();
const { create, query } = require('../controller/bid.controller');


router.post('/query', async(req, res, next) => {
    const bids = await query(req.body);
    res.status(200).json(bids);
});


router.post("/", async(req, res, next) => {
    const bid = await create(req.body)
    res.status(201).json(bid)
});

module.exports = router;