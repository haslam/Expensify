import React from "react";
import { connect } from "react-redux";
import { beginLogin } from "../actions/auth";
export const LoginPage = ({ beginLogin }) => (
  <div>
    <h2>Login with your username and password</h2>
      <button onClick={ beginLogin }>Login</button>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  beginLogin: () => dispatch(beginLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

{/* <input type="text" name="username" placeholder="username"/>
<input type="password" name="password" placeholder="******" /> */}