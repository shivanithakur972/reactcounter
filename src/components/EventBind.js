import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }
    clickHandler = () => {
        this.setState(
            {
                message:'goodbye'
            }  
        )
    }
  render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
        <button>click bttn</button>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
