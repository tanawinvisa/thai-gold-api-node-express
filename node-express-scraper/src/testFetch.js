const priceHandler = require("./controllers/priceHandler");

const fetchEverySecond = async () => {
  try {
    const result = await priceHandler();
    console.log(new Date().toISOString(), result);
  } catch (error) {
    console.error(new Date().toISOString(), "Error:", error.message);
  }
};

setInterval(fetchEverySecond, 100);
