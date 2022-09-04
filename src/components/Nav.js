import React from "react";
import NavFold from "../components/NavFold";
import NavButton from "../components/NavButton";
import iconCalendar from "../images/icon-calendar.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconReminder from "../images/icon-reminders.svg";
import iconTodo from "../images/icon-todo.svg";

const Nav = (props) => {
  const navContent = [
    {
      name: "Features",
      children: [
        {
          name: "Todo List",
          icon: iconTodo,
        },
        {
          name: "Calendar",
          icon: iconCalendar,
        },
        {
          name: "Reminders",
          icon: iconReminder,
        },
        {
          name: "Planning",
          icon: iconPlanning,
        },
      ],
    },
    {
      name: "Company",
      children: [
        {
          name: "History",
        },
        {
          name: "Our Team",
        },
        {
          name: "Blog",
        },
      ],
    },
  ];

  return (
    <nav className={props.navToggle && !props.isDesktop ? "nav--active" : ""}>
      <ul className="nav__list">
        <NavFold
          desc={"Features"}
          content={navContent.find((content) => content.name === "Features")}
        />
        <NavFold
          desc={"Company"}
          content={navContent.find((content) => content.name === "Company")}
        />
        <li>
          <a className="nav__item__link" href="#careers">
            Careers
          </a>
        </li>
        <li>
          <a className="nav__item__link" href="#about">
            About
          </a>
        </li>
      </ul>
      <ul className="nav__btns">
        <NavButton name={"Login"} />
        <NavButton name={"Register"} />
      </ul>
    </nav>
  );
};

export default Nav;
