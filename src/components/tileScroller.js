// import React, {Component} from 'react'
// import HorizontalScroll from 'react-scroll-horizontal'

// class TileScroller extends Component {
//   render() {
//     const child   = { width: `30em`, height: `100%`}
//     const parent  = { width: `60em`, height: `100%`}
//     return (
//       <HorizontalScroll
//         pageLock = { true }
//         reverseScroll = { true }
//         config = {{ stiffness: 2, damping: 2 }}
//         style = {parent}
//       >
//         <div className='singleTile' style={child}>X</div>
//         <div className='singleTile' style={child}>X</div>
//         <div className='singleTile' style={child}>X</div>
//         <div className='singleTile' style={child}>X</div>
//       </HorizontalScroll>
//     )
// }

// }

// export default TileScroller

import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class ScrollingHorizontally extends Component {
  render() {
    const child   = { width: `30em`, height: `100%`, background: 'blue'}
    const parent  = { width: `60em`, height: `100%`}
    return (
      <div style={parent}>
        <h6>horizontal</h6>
        <HorizontalScroll>
            <div style={child}> Hello</div>
            <div style={child}> Hello</div>
            <div style={child}> Hello</div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default ScrollingHorizontally