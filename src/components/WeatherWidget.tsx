import React from "react";
import { createUseStyles } from "react-jss";
import { GeoAlt, Sun, Wind } from "react-bootstrap-icons";

const styles = createUseStyles({
  weatherWidget: {
    padding: "30px 40px",
    backgroundColor: "#24263A",
    borderRadius: "20px",
  },
  textLine: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "20px",
    textAlign: "left",

    "&:last-child": {
      marginBottom: 0,
    },
  },
  textIcon: {
    paddingRight: "10px",
    color: "rgba(255, 255, 255, 0.5)",
  },
});

export default function WeatherWidget() {
  const classes = styles();

  return (
    <div className={classes.weatherWidget}>
      <p className={classes.textLine}>04.09.2022</p>
      <p className={classes.textLine}>20:05:10</p>
      <p className={classes.textLine}>
        <GeoAlt size={30} className={classes.textIcon} />
        Энгельс
      </p>
      <p className={classes.textLine}>
        <Sun
          size={30}
          className={classes.textIcon}
          style={{ color: "#F2A45F" }}
        />
        Ясно +16<sup>&deg;</sup>
      </p>
      <p className={classes.textLine}>
        <Wind
          size={30}
          className={classes.textIcon}
          style={{ color: "#87CFFB" }}
        />
        1 м/с
      </p>
    </div>
  );
}
