import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TwitterLogin from 'react-twitter-auth'
import {Link} from 'react-router'


class Main extends Component {
  constructor() {
    super()
    this.state = { 
      isAuthenticated: false, 
      user: null, 
      token: ''
    }
  }

  onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({
          isAuthenticated: true, 
          user: user, 
          token: token
        })
      }
    })
  }

  onFailed = (error) => alert(error)

  logout = () => {
    this.setState({
      isAuthenticated: false, 
      token: '', 
      user: null
    })
  }

  render() {
    let content = !!this.state.isAuthenticated ?
    (
      <div className="login-succes-box">
        <h1>Logged succefully</h1>
        <h3>You are now authenticated as</h3>
        <div className="user-id-box">
          {this.state.user.email}
        </div>
        <div>
          <button 
            onClick={this.logout} 
            className="button btn-primary" >
            Log out
          </button>
          <Link to="/trump">Here changes componenet</Link>
        </div>
      </div>
    ) :
    (
      <div className="login-start-box">
        <h1>Login please pressing the button</h1>
        <TwitterLogin 
          loginUrl="http://localhost:4000/api/v1/auth/twitter"
          onFailure={this.onFailed} onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
        />
      </div>
    )

    return (
      <div className="Main-box col-xs-12 small phone-only tablet-only desktop-up">
        <div className="wrapper-box">
          {content}
        </div>
      </div>
    )
  }
}

export default connect()(Main)