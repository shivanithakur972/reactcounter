import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler() {
        console.log('clickbttn')
    }
  render() {
   
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
