import React from "react";
import { categories } from "../../utils/constant";
import { color, Stack } from "@mui/system";
import "./sidebar.css";
const Sidebar = ({ selectedCategory, setCategory }) => {
  return (
    
      <div className="container" style={{zIndex:3}}>
        <div className="sidebarContainer">
          <div className="sidebarButtons">
            {categories.map((c) => (
              <button
                className="sidebarButton"
                style={{
                  alignItems: "center",
                  color: "white",
                  border: "none",
                }}
                key={c.name}
                onClick={() => setCategory(c.name)}
              >
                <span>{c.icon}</span>
                <span style={{ marginLeft: "8px" }}>{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
  );
};

export default Sidebar;

