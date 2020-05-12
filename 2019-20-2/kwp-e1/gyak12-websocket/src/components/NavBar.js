import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { Menu, Container } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, getUser } from "../store/user/selectors";
import { logUserOut } from "../store/user/actions";

export function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(isAuthenticated);
  const location = useLocation();

  function linkClass(path) {
    return classnames("item", { active: isActive(path) });
  }

  function isActive(path) {
    return location.pathname.startsWith(path);
  }

  function handleLogoutClick() {
    dispatch(logUserOut());
  }

  return (
    <Menu secondary as={Container}>
      <Link to="/home" className={linkClass("/home")}>
        Home
      </Link>
      <Link to="/playlists" className={linkClass("/playlists")}>
        My Playlists
      </Link>
      <Link to="/tracks" className={linkClass("/tracks")}>
        My Tracks
      </Link>
      <Menu.Menu position="right">
        {isLoggedIn ? (
          <a href="#logout" className="item" onClick={handleLogoutClick}>
            Log out ({user.email})
          </a>
        ) : (
          <Link to="/login" className={linkClass("/login")}>
            Log in
          </Link>
        )}
      </Menu.Menu>
    </Menu>
  );
}
