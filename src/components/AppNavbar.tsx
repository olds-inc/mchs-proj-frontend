import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import {
  Star,
  BarChart,
  CalendarWeek,
  Truck,
  FileEarmarkText,
  Files,
  Map,
  PersonCircle,
  Gear,
} from "react-bootstrap-icons";

import NavbarLinkButton from "../components/NavbarLinkButton";
import NavbarLinkIcon from "../components/NavbarLinkIcon";

const appNavbarStyles = createUseStyles({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px 100px",
  },
  titledList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    "& li": {
      margin: "0 25px",
    },
  },
  iconedList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function AppNavbar() {
  const classes = appNavbarStyles();

  const navLinkStyles = {
    textDecoration: "none",
    color: "unser",
    padding: "0",
    margin: "0",
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.titledList}>
        <li>
          <NavLink to={"/reaction"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Реагирование"
                Icon={Star}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/statistics"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Статистика"
                Icon={BarChart}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/duty"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Служба"
                Icon={CalendarWeek}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/vehicles"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Техника"
                Icon={Truck}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/documents"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Документы"
                Icon={FileEarmarkText}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/planning"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Планирование"
                Icon={Files}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/map"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkButton
                title="Карта"
                Icon={Map}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
      </ul>
      <ul className={classes.iconedList}>
        <li>
          <NavLink to={"/account"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkIcon
                Icon={PersonCircle}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/settings"} style={navLinkStyles}>
            {({ isActive, isPending }) => (
              <NavbarLinkIcon
                Icon={Gear}
                isActive={isActive}
                isPending={isPending}
              />
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
