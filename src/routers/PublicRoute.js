import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

export function PublicRoute ({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route component={(props) => (
      isAuthenticated
      ? (
          <Redirect to="/dashboard" />
        )
      : (
        <Component {...props} />
        )
    )}/>
  )
}

//retrieve uid from state. returns undefined if unset, hence !! it to boolean
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)
