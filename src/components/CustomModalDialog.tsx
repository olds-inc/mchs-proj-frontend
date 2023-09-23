import React from "react";
import { XLg } from "react-bootstrap-icons";

export default function CustomModalDialog({
  children,
  title,
  backgroundColor,
  onCloseClick,
}: {
  children: React.ReactNode;
  title: string;
  backgroundColor: string;
  onCloseClick: (event: React.SyntheticEvent) => void;
}) {
  return (
    <div
      className="modal-dialog modal-xl"
      style={{
        borderRadius: "20px",
        backgroundColor: backgroundColor,
        padding: "25px",
        boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
        pointerEvents: "auto",
      }}
    >
      <div className="mb-3">
        <h3
          style={{
            position: "relative",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "31px",
            color: "rgba(239, 239, 239, 1)",
          }}
        >
          {title}
          <span
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              cursor: "pointer",
            }}
          >
            <XLg size={"30px"} onClick={onCloseClick} />
          </span>
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "rgba(246, 245, 245, 1)",
          boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          padding: "35px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
