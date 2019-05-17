import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS'

export const getFriends = () => (dispatch) =>{
    //get request
    
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res)
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
    
        dispatch({
          type: FAILURE,
          payload: err,
        });
      });
        
    }
   export const addFriend = friend => (dispatch)=>{
     dispatch({ type: FETCHING})
     console.log(friend, dispatch)
      axios.post("http://localhost:5000/api/friends", friend).then(res => {
        console.log(res.data,'ADD FRIEND');
        dispatch({type: SUCCESS, payload: res.data})
      });
    };
    
   export const deleteFriend = friend =>dispatch=> {
     
      axios.delete(`http://localhost:5000/api/friends/${friend.id}`).then(res => {
        console.log(res);
        dispatch({type: SUCCESS, payload: res.data})
      });
    };
    export const editFriend = friend => {
      axios
        .put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(res => {
          console.log(res);
          this.setState({
            friends: [...res.data]
          });
        });
    };
  