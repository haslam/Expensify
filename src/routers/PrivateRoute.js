import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route component={(props) => (
      isAuthenticated
      ? (
         <div>
           <Header />
           <Navigation />
           <Component {...props} />
         </div>
        )
      : (
        <Redirect to="/" />
        )
    )}/>
  )


//retrieve uid from state. returns undefined if unset, hence !! it to boolean
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
