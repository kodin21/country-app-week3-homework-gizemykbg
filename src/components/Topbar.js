import React from "react";
import "./topbar.css";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faEnvelope,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons";

export default function Topbar({ theme, toggleTheme }) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Country App</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon className="mr-2" icon={faHandScissors} />
            <span className="topIconBag">1</span>
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon className="mr-2" icon={faChartBar} />
          </div>
          <nav
            className={`topRight
    ${theme === "light" ? "lightTheme" : "darkTheme component"}`}>
            <div className="topRight">
              <Toggle theme={theme} onClick={toggleTheme} />
            </div>
          </nav>
          <img className="topRight"
            src="https://i.pinimg.com/564x/78/a8/0f/78a80f3dd37c6a775b7869f55fbc79b0.jpg"
            alt="profile"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
