import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeConfinement from './components/EmployeeConfinement';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
function App() {
  return (
    <Router>
    <div className="App">
        <h1>Employees </h1>
        <div className="employee-container">
        {/* {this.state.employees.map(employee => (
         this is how the employee database will render employees 
        )} */}
         
        </div>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={EmployeeConfinement}/>
        {/* also here we render a form to ADD employees */}
  </div>
  </Router>
  );
}

export default App;
