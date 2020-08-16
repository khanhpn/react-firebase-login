import React, {useState} from "react";
import Button from "@material-ui/core/Button";

const Login = ({authenticate}) => {
  return (
    <div className="login">
      <p>Please click button below to sign in!</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => authenticate("Github")}>
        Log In With Gitub
      </Button>
      <Button variant="contained" color="secondary">
        Log In With Facebook
      </Button>
    </div>
  );
};
export default Login;
