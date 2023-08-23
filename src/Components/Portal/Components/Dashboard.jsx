import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCoinData } from "../../../Api/bitcoin";
import LineChart from "../LineChart";
import MonthlyPieChart from "../PieChart";
import { settingChartData } from "../SettingChartData";
import { total, updates } from "../data";
import "./style.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [dropdown, setDropdown] = useState();
  const [logoutMenu, setLogoutMenu] = useState(false);
  const [prices1, setPrices1] = useState([]);
  const [prices2, setPrices2] = useState([]);

  const changeDays = (value) => {
    if (value == "option1") {
      settingChartData(
        setChartData,
        prices1.slice(60, 90),
        prices2.slice(60, 90)
      );
    } else if (value == "option2") {
      settingChartData(
        setChartData,
        prices1.slice(30, 60),
        prices2.slice(30, 60)
      );
    } else if (value == "option3") {
      settingChartData(
        setChartData,
        prices1.slice(0, 30),
        prices2.slice(0, 30)
      );
    }
  };

  const getData = async () => {
    setLoading(true);
    const bitcoin = await getCoinData("bitcoin", 90);
    setPrices1(bitcoin);
    const ethereum = await getCoinData("ethereum", 90);
    setPrices2(ethereum);
    settingChartData(
      setChartData,
      bitcoin.slice(60, 90),
      ethereum.slice(60, 90)
    );
    setLoading(false);
  };

  const handleSelectChange = (event) => {
    setDropdown(event.target.value);
    changeDays(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) getData();
    else navigate("/");
  }, []);

  return (
    <div className="right-container">
      <div className="header-row">
        <div className="icon">
          <h1>Dashboard</h1>
        </div>
        <div className="header-right-container">
          <div className="search-container">
            <input
              className="search-bar"
              type="search"
              placeholder="Search.."
            ></input>
            <button class="search-button">
              <img
                src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
                alt="search"
              />
            </button>
          </div>
          <div style={{ width: "1.5rem" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11502/11502478.png"
              style={{ width: "100%" }}
              alt="bell-icon"
            />
          </div>
          <div
            className="user-avatar"
            onClick={() => setLogoutMenu(!logoutMenu)}
          >
            <div>
              <img
                src={state.avatarURL}
                style={{ width: "100%", borderRadius: "100%" }}
                alt=""
              />
            </div>
            {logoutMenu && (
              <div className="logout-menu">
                <button onClick={() => navigate("/")}>Log Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="numbers-row">
        {total.map((i) => (
          <div className="numbers-card" style={{ backgroundColor: i.color }}>
            <div>{i.heading}</div>
            <h3>{i.value}</h3>
          </div>
        ))}
      </div>
      <div className="chart-container">
        <h2>Activity</h2>
        <select value={dropdown} onChange={handleSelectChange}>
          <option value="option1">July-August 2023</option>
          <option value="option2">June-July 2023</option>
          <option value="option3">May-June 2023</option>
        </select>
        <LineChart chartData={chartData} />
      </div>

      <div className="pie-chart-row">
        <div className="pie-chart-card">
          <h2>Top Coins</h2>
          <MonthlyPieChart data={prices1} />
        </div>

        <div className="updates-container">
          <h2>Price Updates</h2>
          <div className="updates-flex">
            {updates.map((i) => (
              <div className="updates">
                <div
                  style={{
                    width: "5px",
                    height: "50px",
                    backgroundColor: i.color,
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem" }}>{i.heading}</div>
                  <div>{i.subHeading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
