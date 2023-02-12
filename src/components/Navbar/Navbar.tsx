// Libraries
import { FC } from "react";

// Styles
import "./Navbar.scss";

export const Navbar: FC = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <nav>
          <ul>
            <li>Budget</li>
            <li>Todo</li>
            <li>Reminders</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
