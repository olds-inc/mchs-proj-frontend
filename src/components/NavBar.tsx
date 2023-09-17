import React from "react";
import { createUseStyles } from "react-jss";

import {
  Icon as BootstrapIcon,
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

/*
Я ебал верстку и мне вообще не нравится то что тут происходит со стилями
Но учить CSS мне впадлу поэтому пусть так
Если проект станет коммерчески успешным, я это перепишу
*/

const useNavBarStyles = createUseStyles({
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "35px 50px",

    "& > .leftSide": {
      flexGrow: 5,
      display: "flex",
      justifyContent: "space-between",
    },

    "& > .rightSide": {
      flexGrow: 1,
      display: "flex",
      justifyContent: "end",
    },
  },
});

export default function NavBar() {
  const classes = useNavBarStyles();

  return (
    <nav className={classes.navBar}>
      <div className="leftSide">
        <NavElementWithTitle
          title="Реагирование"
          IconComponent={Star}
          active={true}
        />
        <NavElementWithTitle title="Статистика" IconComponent={BarChart} />
        <NavElementWithTitle title="Служба" IconComponent={CalendarWeek} />
        <NavElementWithTitle title="Техника" IconComponent={Truck} />
        <NavElementWithTitle
          title="Документы"
          IconComponent={FileEarmarkText}
        />
        <NavElementWithTitle title="Планирование" IconComponent={Files} />
        <NavElementWithTitle title="Карта" IconComponent={Map} />
      </div>
      <div className="rightSide">
        <NavElementWithIcon IconComponent={PersonCircle} />
        <NavElementWithIcon IconComponent={Gear} />
      </div>
    </nav>
  );
}

const useNavElementWithTitleStyles = createUseStyles({
  navElementWithTitle: {
    display: "flex",
    alignItems: "center",
    padding: "15px 25px",

    "& > .icon": {
      marginRight: "15px",
      color: "#F2A45F",
    },
    "& > .title": {
      fontWeight: "bold",
      color: "#FFF",
    },

    "&:hover": {
      extend: "_navElementWithTitleActive",
    },

    "&.active": {
      extend: "_navElementWithTitleActive",
    },
  },

  _navElementWithTitleActive: {
    "& > .icon": {
      color: "#000",
    },
    "& > .title": {
      color: "#000",
      fontWeight: "normal",
    },
  },
});

function NavElementWithTitle({
  title,
  IconComponent,
  active = false,
}: {
  title: string;
  IconComponent: BootstrapIcon;
  active?: boolean;
}) {
  const classes = useNavElementWithTitleStyles();

  return (
    <NavElement active={active}>
      <div
        className={`${classes.navElementWithTitle} ${active ? "active" : ""}`}
      >
        <span className="icon">
          <Icon IconComponent={IconComponent} />
        </span>
        <span className="title">{title}</span>
      </div>
    </NavElement>
  );
}

const useNavElementWithIconStyles = createUseStyles({
  navElementWithIcon: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",

    "& > .icon": {
      color: "#F2A45F",
    },

    "&:hover": {
      extend: "_navElementWithIconActive",
    },

    "&.active": {
      extend: "_navElementWithIconActive",
    },
  },
  _navElementWithIconActive: {
    "& > .icon": {
      color: "#000",
    },
  },
});

function NavElementWithIcon({
  IconComponent,
  active = false,
}: {
  IconComponent: BootstrapIcon;
  active?: boolean;
}) {
  const classes = useNavElementWithIconStyles();

  return (
    <NavElement active={active}>
      <div
        className={`${classes.navElementWithIcon} ${active ? "active" : ""}`}
      >
        <span className="icon">
          <Icon IconComponent={IconComponent} />
        </span>
      </div>
    </NavElement>
  );
}

const useNavElementStyles = createUseStyles({
  navElement: {
    cursor: "pointer",
    color: "#fff",

    "&.active": {
      extend: "_navElementActive",
    },

    "&:hover": {
      extend: "_navElementActive",
    },
  },
  _navElementActive: {
    backgroundColor: "#4C9EED",
    borderRadius: "8px",
  },
});

function NavElement({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  const classes = useNavElementStyles();

  return (
    <div className={`${classes.navElement} ${active ? "active" : ""}`}>
      {children}
    </div>
  );
}

function Icon({
  IconComponent,
  size = "24px",
}: {
  IconComponent: BootstrapIcon;
  size?: string;
}) {
  return (
    <span>
      <IconComponent size={size} />
    </span>
  );
}
