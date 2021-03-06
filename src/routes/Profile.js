import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../myBase";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};
export default Profile;
