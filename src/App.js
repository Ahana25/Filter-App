import React from "react";
// import Input from './Input';
import {Route,Switch} from 'react-router-dom';
import Home from './Menu/Home';
import About from './Menu/About';
import Search from './Menu/Search';
import Contact from './Menu/Contact';
import Error from './Menu/Error';
import Nav from './Nav';
import Landing from './Landing';
import Login from './Login';
import Register from './Register'


function App() {
  return (
    <div className="App">
<Nav/>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path ='/login' component={Login}/>
      <Route exact path ='/register' component={Register}/>

      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
