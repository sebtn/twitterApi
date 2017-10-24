import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Trump extends Component {

  componentDidMount = () => {
    var request = new Request('https://api.twitter.com/1.1/search/tweets.json?q=%23trump')
    fetch(request, {mode: 'no-cors'}).then(response => console.log(response))
  }

  render(){
    return(
      <h2>This is trump</h2>
    )
  }
}


export default connect()(Trump)