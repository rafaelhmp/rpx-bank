import React from "react";

const MobileDropdown = ({ submenu, dropdown, index }) => {
  return (
    <div className={`mobile-dropdown ${dropdown === index ? "show" : ""}`}>
      {submenu.map((sub, index) => {
        return <p key={index}>{sub.title}</p>;
      })}
    </div>
  );
};

export default MobileDropdown;
