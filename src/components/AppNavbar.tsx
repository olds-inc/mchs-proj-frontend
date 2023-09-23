import React from "react";

import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <ul>
      <li>
        <NavLink
          to={"/reaction"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Реагирование
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Статистика
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/duty"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Служба
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/vehicles"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Техника
        </NavLink>
      </li>
    </ul>
  );
}
