import React, { Component } from "react"
import {connect} from "react-redux"
import {loadUsers} from "./actions"

// CSS Styling
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
          <a href='https://repl.it/@HippErger'>Repl.it</a>
          <a href='https://github.com/HippErger'>GitHub</a>
        </header>
        <main>
          <div>
            <p>In preparation for my next web development job, I've dedicated myself to solving 
              an algorithmic challenge everyday. Here's the UI for each of them.
            </p>
            <div className='tileScroller'>
              <div className='singleTile'>X</div>
              <div className='singleTile'>X</div>
              <div className='singleTile'>X</div>
              <div className='singleTile'>X</div>
            </div>
          </div>
          <p className='withLove'>Built with Love by Clayton Berger</p>
        </main>
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
