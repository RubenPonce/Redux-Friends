import React from "react";
import { connect } from "react-redux";

// import actions
import {getFriends} from '../actions'

class Friends extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getFriends()
   
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
{console.log(this.props)}
{this.props.characters.map(friend =>{
    return (
        <div>
        <h1>name: {friend.name}</h1>
        <h3>email: {friend.email}</h3>
        <h6> age: {friend.age}</h6>
         </div>
    )
})}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  };
};



export default connect(
  mapStateToProps,/* mapStateToProps replaces null here */
    { getFriends }/* action creators go here */
  
)(Friends);
