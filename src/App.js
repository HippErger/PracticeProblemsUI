import React, { Component } from "react"
import {connect} from "react-redux"
import {loadUsers} from "./actions"
import './stylesheets/app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // componentDidMount() {
  //   this.props.loadUsers()
  // }

  render() {
    return (
      <div>
        <header>
          <a href='https://www.linkedin.com/in/claytonrberger/'>LinkedIn </a>
          <a href='#'>Contact</a>
          <a href='https://github.com/HippErger'>GitHub</a>
        </header>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      dispatch(loadUsers())
    }
  }
}
export default connect(null,mapDispatchToProps)(App)
