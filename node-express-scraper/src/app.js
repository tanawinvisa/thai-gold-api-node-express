// index.js
const express = require("express");
const cors = require("cors"); // ← add this
const priceRoutes = require("./routes/price");

const app = express();
const PORT = process.env.PORT || 3000;

// Only allow your Vercel front-end
app.use(
  cors({
    origin: "https://frontend-for-thai-gold-api.vercel.app",
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use("/api/price", priceRoutes);

// health-check
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
