import { useEffect, useState } from "react";
import { navItems, routesList } from "../config/navbar";
import { Icon } from "../icons/icons";
import "../styles/components/Navbar.css";

export function Navbar() {
  const [activeName, setActiveName] = useState("dashboard");
  useEffect(() => {
    const url = document.URL;
    console.log(url);
    routesList.forEach((e) => {
      if (url.includes(e)) setActiveName(e);
    });
  }, []);
  return (
    <nav className="navbar round-white">
      <section className="logo-section">
        <img src="taskly-logo-2.png" alt="" className="nav-logo" />
        <p className="logo-text">Taskly</p>
      </section>
      <section className="buttons-section">
        <ul className="bs-1">
          {navItems.map((obj, idx) => {
            if (idx > 2) return false;
            const isActive = obj.text.toLowerCase() == activeName;
            return (
              <li key={idx}>
                <a
                  href={obj.link}
                  className={`bs-btn ${isActive ? "active" : ""}`}
                >
                  <Icon name={obj.icon} size={24} />
                  {obj.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="bs-2">
          {navItems.map(
            (obj, idx) =>
              idx > 2 && (
                <li key={idx}>
                  <a href={obj.link} className="bs-btn">
                    <Icon name={obj.icon} size={24} />
                    {obj.text}
                  </a>
                </li>
              )
          )}
        </ul>
      </section>
    </nav>
  );
}
