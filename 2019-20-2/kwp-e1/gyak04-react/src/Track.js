import React from "react";

export function Track({ artist = "Unknown", title, length }) {
  return (
    <li>
      <strong>
        {artist} - {title || "No title provided"}
      </strong>
      <small>{length || "Unknown length"}</small>
    </li>
  );
}
