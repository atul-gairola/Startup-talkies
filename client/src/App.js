import React from 'react';
import './App.css';
import {Home, Auth, Employee, Employer, AdminDashboard, IndividualApplication, Edit} from './routes/routes';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/auth' component={Auth} />
    <Route path='/employee' component={Employee} />
    <Route path='/employer' component={Employer} />
    <Route path='/admin' exact component={AdminDashboard} />
    <Route path='/admin/individualApplication' component={IndividualApplication} />
    <Route path='/edit' component={Edit} />
    </Switch>    
    </div>
  );
}

export default App;
