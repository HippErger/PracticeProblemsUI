import React, { Component } from "react"
import {connect} from "react-redux"
import {loadUsers} from "./actions"

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
        <h2>Hello World</h2>
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
