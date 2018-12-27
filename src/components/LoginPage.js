import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"
import { beginLogin, githubLogin } from "../actions/auth";


export const LoginPage = ({ beginLogin, githubLogin }) => (
  <div className="slash-layout">
    <div className="slash-layout__box">
      <div>
        <h2 className="slash-layout__title">Expensified</h2>
        <p>Be in control of your expenses</p>
      </div>      
      <button className="button button--google" onClick={ beginLogin }>Login with Google <FontAwesomeIcon icon={faGoogle} size="2x" /></button>
      <button className="button button--github" onClick={ githubLogin }>Login with GitHub <FontAwesomeIcon icon={faGithub} size="2x" /></button>
    </div>    
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  beginLogin: () => dispatch(beginLogin()),
  githubLogin: () => dispatch(githubLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

{/* <input type="text" name="username" placeholder="username"/>
<input type="password" name="password" placeholder="******" /> */}
