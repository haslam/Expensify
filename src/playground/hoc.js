// Higher Order Component (HOC) - A component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>this a private message</p>}
      <WrappedComponent {...props} />
    </div>
  )
}
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated 
      ? <WrappedComponent {...props}/>
      : <p>Please, login to see info</p>
      }
    </div>
  )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo info="You are now logged in" isAuthenticated={false} />, document.getElementById('app'));