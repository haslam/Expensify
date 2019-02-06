import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { beginLogout } from '../actions/auth'
import hashEmail from '../helper/hashing'

export const Header = ({ beginLogout, email, displayName }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="show-for-mobile">
          <button className="mobile__hamburger" role="menu" title="Navigation menu hamburger" onClick={openNavigation}>{`\u{1F354}`}</button>
        </div>
        <Link className="header__title" to="/dashboard">
          <h1>Expensified</h1>
        </Link>
        
        <div className="header__profile show-for-desktop">
          <div className="header__avatar">
            <img className="avatar avatar--sphere" src={`https://gravatar.com/avatar/${hashEmail(email)}?s=200`}/>
            <small style={{paddingRight: "1rem", color: "#dcdcdc"}}>{displayName}</small>
          </div>
          <div style={{ alignSelf: "center" }}>
            <button className="button button--trans" onClick={beginLogout}>Logout</button>
          </div>  
        </div>
      </div>
    </div>
  </header>
)

const openNavigation = () => {
  document.body.classList.toggle('mobile__nav--on');
}

const mapDispatchToProps = (dispatch) => ({
  beginLogout: () => dispatch(beginLogout())
})

const mapStateToProps = (state) => ({
  email: state.auth.email,
  displayName: state.auth.displayName,
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)

{/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
