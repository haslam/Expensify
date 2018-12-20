import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'

export function PrivateRoute ({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route component={(props) => (
      isAuthenticated
      ? (
         <div>
           <Header />
           <Component {...props} />
         </div>
        )
      : (
        <Redirect to="/" />
        )
    )}/>
  )
}

//retrieve uid from state. returns undefined if unset, hence !! it to boolean
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
