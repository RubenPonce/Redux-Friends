import React, { Component } from 'react'
import { connect } from "react-redux";
import {addFriend, deleteFriend,editFriend} from '../actions'
export class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          age: "",
          email: "",
        
        };
      }
  
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      formSubmit = e => {
        e.preventDefault();
        console.log(this.props)
        const obj = { ...this.state };
        
        this.props.addFriend(obj)
       
        
        console.log(obj);
      };
    
      
      render() {
        return (
          <form onSubmit={this.formSubmit}>
            <label htmlFor="name">Name</label>
            <input
              required
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"name"}
            />
    
            <label htmlFor="age">Age</label>
            <input
              required
              value={this.state.age}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"age"}
            />
    
            <label htmlFor="email">email</label>
            <input
              required
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder=".."
              name={"email"}
            />
    
            <button>ADD NEW FRIEND!!!!</button>
          </form>
        );
      }
}
const mapStateToProps = state => {
  
    return {
      characters: state.charsReducer.characters,
      error: state.charsReducer.error
    };
  };
  
  
  
  export default connect(
    mapStateToProps,/* mapStateToProps replaces null here */
      { addFriend }/* action creators go here */
    
  )(AddFriend);
