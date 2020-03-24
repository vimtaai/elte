import React from "react";

export function Track({ track }) {
  const { artist = "Unknown", title, length } = track;
  
  return (
    <div className="item">
      <i className="large middle aligned compact music icon"></i>
      <div className="content">
        <strong className="header">
          {artist} - {title || "No title provided"}
        </strong>
        <small className="description">{length || "Unknown length"}</small>
      </div>
    </div>
  );
}
