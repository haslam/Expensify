import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { beginLogout } from '../actions/auth'

export const Header = ({ beginLogout, email }) => (
  <div>
    <h1>Expensify App</h1>
    <p>Welcome {email}</p>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={beginLogout}>Logout</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  beginLogout: () => dispatch(beginLogout())
})

const mapStateToProps = (state) => ({
  email: state.auth.email
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)