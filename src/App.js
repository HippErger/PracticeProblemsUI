import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadUsers} from './actions'

// style imports
import  './stylesheets/app.css'

// images 
import car2goImage from './images/car2go_image2.jpg'


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
          <div className='tileTitleBoard'>
            <div className='tileTitle car2GoTitle'> 
              <h6>CAR2GO</h6>
              <span>Hackathon</span>
            </div>
            <div className='tileTitle'> React Tic Tac Toe </div>
            <div className='tileTitle'> JQuery Towers of Hanoi </div>
          </div>
          <div className='shapeBoard'>
            <div className='shapeTile'>
              Hello
            </div>
            <div className='shapeTile'>
              Hello
            </div>
            <div className='shapeTile'>
              Hello
            </div>
          </div>
          
        </main>
        <footer>
          <p className='withLove'>Built with Love by Clayton Berger</p>
        </footer>
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
