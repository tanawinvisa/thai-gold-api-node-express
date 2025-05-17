const express = require("express");
const priceHandler = require("../controllers/priceHandler");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await priceHandler();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: "failure",
      response: "An error occurred while fetching price data.",
    });
  }
});

module.exports = router;
