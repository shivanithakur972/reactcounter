import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  }

  /* handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlecommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  hhandleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  }; */
  handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`);
  }
   
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input
            type="text"
            name='username'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            name='comment'
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select onChange={this.handleChange} name='topic'>
            <option value="Reactjs">Reactjs</option>
            <option value="Html">Html</option>
            <option value="css">css</option>
          </select>
        </div>
        <button type="submit">Sumbit</button>
      </form>
    );
  }
}
