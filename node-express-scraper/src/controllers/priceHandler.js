const fetch = require("node-fetch");
const cheerio = require("cheerio");
const PRICE_CONFIG = require("../config/price");

const priceHandler = async () => {
  // Add a cache-busting query parameter
  const url = `${PRICE_CONFIG.URL}?_=${Date.now()}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  const statusCode = response.status;
  const body = await response.text();

  if (statusCode !== 200) {
    return {
      status: "failure",
      response: "Service is unavailable, Please try again later.",
    };
  }

  const $ = cheerio.load(body);

  const date = $(PRICE_CONFIG.SELECTOR.DATE).text().trim();
  const updateTime = $(PRICE_CONFIG.SELECTOR.UPDATE_TIME).text().trim();
  const goldBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BUY).text().trim();
  const goldSell = $(PRICE_CONFIG.SELECTOR.GOLD_SELL).text().trim();
  const goldBarBuy = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_BUY).text().trim();
  const goldBarSell = $(PRICE_CONFIG.SELECTOR.GOLD_BAR_SELL).text().trim();
  const priceComparePrevious = $(PRICE_CONFIG.SELECTOR.PRICE_COMPARE_PREVIOUS)
    .text()
    .trim();
  const priceCompareYesterday = $(PRICE_CONFIG.SELECTOR.PRICE_COMPARE_YESTERDAY)
    .text()
    .trim()
    .substring(7);

  const formatPriceComparePrevious =
    priceComparePrevious.charAt(0) === "-"
      ? priceComparePrevious
      : `+${priceComparePrevious}`;
  const formatPriceCompareYesterday =
    priceCompareYesterday.charAt(0) === "-"
      ? priceCompareYesterday
      : `+${priceCompareYesterday}`;

  return {
    status: "success",
    response: {
      date,
      update_time: updateTime,
      price: {
        gold: {
          buy: goldBuy,
          sell: goldSell,
        },
        gold_bar: {
          buy: goldBarBuy,
          sell: goldBarSell,
        },
        change: {
          compare_previous: formatPriceComparePrevious,
          compare_yesterday: formatPriceCompareYesterday,
        },
      },
    },
  };
};

module.exports = priceHandler;
