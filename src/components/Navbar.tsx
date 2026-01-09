import { Icon } from "../icons/icons";
import "../styles/components/Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <section className="logo-section">
        <img src="taskly-logo-2.png" alt="" className="nav-logo" />
        <p className="logo-text">Taskly</p>
      </section>
      <section className="buttons-section">
        <ul className="bs-1">
          <li>
            <a href="">
              <Icon name="dashboard" size={24} />
              Dashboard
            </a>
          </li>
          <li className="bs-btn">
            <a href="">
              <Icon name="my-tasks" size={24} />
              My tasks
            </a>
          </li>
          <li className="bs-btn">
            <a href="">
              <Icon name="notifications" size={24} />
              Notifications
            </a>
          </li>
        </ul>
        <ul className="bs-2">
          <li className="bs-btn">
            <Icon name="settings" size={24} />
            Settings
          </li>
          <li className="bs-btn">
            <Icon name="log-out" size={24} />
            Log Out
          </li>
        </ul>
      </section>
    </nav>
  );
}
