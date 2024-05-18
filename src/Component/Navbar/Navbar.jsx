import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="listing">
        <Link to="/listing">Listing</Link>
      </Menu.Item>
      <Menu.Item key="new-listing">
        <Link to="/new-listing">New Listing</Link>
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Item key="signout">
          <Link to="/signout">Sign Out</Link>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item key="signin">
            <Link to="/signin">Sign In</Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
