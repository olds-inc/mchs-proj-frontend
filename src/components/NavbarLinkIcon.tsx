import React from "react";
import { Icon } from "react-bootstrap-icons";
import { createUseStyles } from "react-jss";

const navbarLinkIconStyles = createUseStyles({
  navbarLinkIcon: {
    color: "#fff",
    padding: "10px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&.active": {
      backgroundColor: "#24263A",
    },
  },
});

export default function NavbarLinkIcon({
  Icon,
  isActive = false,
  isPending = false,
}: {
  Icon: Icon;
  isActive: boolean;
  isPending: boolean;
}) {
  const classes = navbarLinkIconStyles();

  return (
    <div className={`${classes.navbarLinkIcon} ${isActive ? "active" : ""}`}>
      <span>
        <Icon size={25} />
      </span>
    </div>
  );
}
