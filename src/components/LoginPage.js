import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { beginLogin, githubLogin, facebookLogin } from "../actions/auth";


export const LoginPage = ({ beginLogin, githubLogin, facebookLogin }) => (
  <div className="slash-layout">
    <div className="slash-layout__box">
      <div>
        <h2 className="slash-layout__title">Expensified</h2>
        <p>Be in control of your expenses</p>
      </div>      
      <button className="button button--google button__brand--mb" onClick={ beginLogin }>Login with Google <FontAwesomeIcon icon={faGoogle} size="2x" /></button>
      <button className="button button--github button__brand--mb" onClick={ githubLogin }>Login with GitHub <FontAwesomeIcon icon={faGithub} size="2x" /></button>
      <button className="button button--facebook button__brand--mb" onClick={ facebookLogin }>Login with Facebook <FontAwesomeIcon icon={faFacebook} size="2x" /></button>
    </div>    
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  beginLogin: () => dispatch(beginLogin()),
  githubLogin: () => dispatch(githubLogin()),
  facebookLogin: () => dispatch(facebookLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

{/* <input type="text" name="username" placeholder="username"/>
<input type="password" name="password" placeholder="******" /> */}
