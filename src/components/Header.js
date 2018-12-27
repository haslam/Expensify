import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { beginLogout } from '../actions/auth'

export const Header = ({ beginLogout, email }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensified</h1>
        </Link>
        <div>
          <small style={{paddingRight: "1rem", color: "#dcdcdc"}}>{email}</small>
          <button className="button button--link" onClick={beginLogout}>Logout</button>
        </div>   
        
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  beginLogout: () => dispatch(beginLogout())
})

const mapStateToProps = (state) => ({
  email: state.auth.email
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)

{/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
