import React from "react";
import { connect } from "react-redux";
import { beginLogin } from "../actions/auth";
export const LoginPage = ({ beginLogin }) => (
  <div className="slash-layout">
    <div className="slash-layout__box">
      <h2 className="slash-layout__title">Expensify</h2>
      <p>Be in control of your expenses</p>
      <button className="button" onClick={ beginLogin }>Login with Google</button>
      </div>    
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  beginLogin: () => dispatch(beginLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

{/* <input type="text" name="username" placeholder="username"/>
<input type="password" name="password" placeholder="******" /> */}