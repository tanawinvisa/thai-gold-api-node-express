const express = require("express");
const priceRoutes = require("./routes/price");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/price", priceRoutes);

// Add a root route for testing
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
