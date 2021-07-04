import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div>
    <span>Welcome!</span>
  </div>
);

const Home = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/edit-profile">Edit Profile</Link>
        </li>
        <li>
          <Link to="/create-account">Create Account</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </nav>
    <Welcome />
  </>
);
export default Home;
