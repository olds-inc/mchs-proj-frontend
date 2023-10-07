import React from "react";
import { Icon } from "react-bootstrap-icons";
import { createUseStyles } from "react-jss";

const navbarLinkButtonStyles = createUseStyles({
  navbarLinkButton: {
    color: "#fff",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&.active": {
      backgroundColor: "#F2A45F",
    },

    "&:hover": {
      backgroundColor: "#F2A45F",
    },
  },
  icon: {
    marginRight: "10px",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default function NavbarLinkButton({
  title,
  Icon,
  isActive = false,
  isPending = false,
}: {
  title: string;
  Icon: Icon;
  isActive: boolean;
  isPending: boolean;
}) {
  const classes = navbarLinkButtonStyles();

  return (
    <div className={`${classes.navbarLinkButton} ${isActive ? "active" : ""}`}>
      <span className={classes.icon}>
        <Icon size={25} />
      </span>
      <span className={classes.title}>{title}</span>
    </div>
  );
}
