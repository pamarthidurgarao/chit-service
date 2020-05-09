const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, query } = require('../controller/user.controller');
/**
 * GET request to /user
 */
router.get('/', async(req, res, next) => {
    const users = await getAllUsers();
    res.status(200).json({
        message: 'All Users were fetched',
        users: users
    });
});

/**
 * GET request to /user/:id
 */
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'User with id was fetch ' + req.params.id
    });
});

/**
 * POST request to /user
 */
router.post("/", async(req, res, next) => {
    const user = await createUser(req.body)
    res.status(201).json({
        message: "Created successfully",
        user
    })
});

router.post("/query", async(req, res, next) => {
    const user = await query(req.body)
    res.status(200).json(user);
});

module.exports = router;