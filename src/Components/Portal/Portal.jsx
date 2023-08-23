import { useState } from "react";
import { navMenu } from "./data";
import Dashboard from "./Components/Dashboard";
import Transaction from "./Components/Transaction";
import Schedules from "./Components/Schedules";
import Settings from "./Components/Settings";
import UsersInfo from "./Components/UsersInfo";
import { CloseIcon, HamburgerIcon } from "../../Assets/svg";

const Portal = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const handleNavItemClick = (index) => {
    setSelectedNavItem(index);
  };
  return (
    <div className="dashboard-container">
      <div className="drawer-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
        <HamburgerIcon />
        Menu
      </div>
      <div className={`left-container ${drawerOpen ? "drawer-open" : ""}`}>
        {drawerOpen && (
          <div onClick={() => setDrawerOpen(false)} style={{ zIndex: 100 }}>
            <CloseIcon /> Close
          </div>
        )}
        <div className="nav-container">
          <div className="icon-container">
            <h1 className="board-icon">Board.</h1>
          </div>
          <div className="nav-items-container">
            {navMenu.map((i, k) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontWeight: selectedNavItem === k ? "700" : "normal",
                }}
                onClick={() => handleNavItemClick(k)}
              >
                <div>{i.icon}</div>
                <div className="nav-item" style={{ color: "white" }} key={k}>
                  {i.name}
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-nav-items">
            <div>Settings</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="drawer-container">
          <div className="icon-container">
            <h1 className="board-icon">Board.</h1>
          </div>
          <div className="nav-items-container">
            {navMenu.map((i, k) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontWeight: selectedNavItem === k ? "700" : "normal",
                }}
                onClick={() => handleNavItemClick(k)}
              >
                <div>{i.icon}</div>
                <div className="nav-item" style={{ color: "white" }} key={k}>
                  {i.name}
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-nav-items">
            <div>Settings</div>
            <div>Contact Us</div>
          </div>
        </div>
      </div>
      {selectedNavItem === 0 && <Dashboard />}
      {selectedNavItem === 1 && <Transaction />}
      {selectedNavItem === 2 && <Schedules />}
      {selectedNavItem === 3 && <UsersInfo />}
      {selectedNavItem === 4 && <Settings />}
    </div>
  );
};

export default Portal;
