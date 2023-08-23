const convertDate = (number) => {
  const date = new Date(number);
  return date.getDate() + "/" + (date.getMonth() + 1);
};

export const settingChartData = (setChartData, prices1, prices2) => {
  setChartData({
    labels: prices1.map((data) => convertDate(data[0])),
    datasets: [
      {
        label: "Bitcoin",
        data: prices1.map((data) => data[1]),
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233,0.1)",
        borderColor: "#9BDD7C",
        pointRadius: 0,
      },
      prices2 && {
        label: "Ethereum",
        data: prices2.map((data) => data[1]),
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        backgroundColor: prices2 ? "transparent" : "rgba(97, 201, 111,0.1)",
        borderColor: "#E9A0A0",
        pointRadius: 0,
        yAxisID: "y2",
      },
    ],
  });
};
