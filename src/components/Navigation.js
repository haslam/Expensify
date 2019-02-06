import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faMoneyCheckAlt, faPoll, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { beginLogout } from '../actions/auth'
import hashEmail from '../helper/hashing'

export const Navigation = ({ beginLogout, email, displayName}) => {

  return (
    <div className="mobile-navigation mobile-navigation--left">
      <div className="navigation__profile">
        <img className="avatar avatar--sphere" src={`https://gravatar.com/avatar/${hashEmail(email)}?s=200`}/>
        <small>{displayName}</small>
        <button className="button__logout--left" onClick={beginLogout}>Logout</button>
      </div>
      <div className="navigation__tabs">
        <ul role="navigation" className="tabs-menu">
          <li className="tabs-menu__list">
            <Link to="/dashboard" activeClassName="tm-active">
              <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
            </Link>
          </li>
          <li className="tabs-menu__list">
            <Link to="/expenses" activeClassName="tm-active">
              <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
            </Link>
          </li>
          <li className="tabs-menu__list">
            <Link to="/report" activeClassName="tm-active">
              <FontAwesomeIcon icon={faPoll} size="2x" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  beginLogout: () => dispatch(beginLogout())
})
const mapStateToProps = (state) => ({
  email: state.auth.email,
  displayName: state.auth.displayName
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)