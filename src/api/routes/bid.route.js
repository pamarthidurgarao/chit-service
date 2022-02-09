const express = require("express");
const router = express.Router();
const {
  create,
  query,
  socketTest,
  deleteBid,
} = require("../controller/bid.controller");

router.post("/query", async (req, res, next) => {
  const bids = await query(req.body);
  res.status(200).json(bids);
});

router.post("/", async (req, res, next) => {
  const bid = await create(req.body);
  res.status(201).json(bid);
});

router.get("/:id", async (req, res, next) => {
  await socketTest(req.params.id);
  res.status(201).json();
});

router.delete("/:id", async (req, res, next) => {
  await deleteBid(req.params.id);
  res.status(200).json();
});

module.exports = router;
