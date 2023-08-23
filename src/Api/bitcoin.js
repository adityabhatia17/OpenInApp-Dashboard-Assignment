import axios from "axios";

export const API_URL = "https://api.coingecko.com/api/v3/coins";
export const getCoinData = (id, days) => {
  const coinData = axios
    .get(
      `${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      return response.data.prices;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coinData) return coinData;
  else return;
};
