import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

export function NavBar() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname.startsWith(path);
  }

  return (
    <div className="ui secondary container menu">
      <Link
        to="/home"
        className={classnames("item", { active: isActive("/home") })}
      >
        Home
      </Link>
      <Link
        to="/playlists"
        className={classnames("item", { active: isActive("/playlists") })}
      >
        My Playlists
      </Link>
      <Link
        to="/tracks"
        className={classnames("item", { active: isActive("/tracks") })}
      >
        My Tracks
      </Link>
    </div>
  );
}
