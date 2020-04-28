import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// sass
import './sass/style.scss';

// Pages
import Blogs from './pages/Blogs';
import About from './pages/About';
import Error from './pages/Error';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const [dark, setDark]= useState(intitialMode());
  const changeMode=()=>{
    setDark(!dark);
  }
  useEffect(()=>{
    localStorage.setItem('dark', JSON.stringify(dark));
  },[dark])

  function intitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <Router>
      <div className={dark ? "dark-mode": "light-mode"}>
        <Header changeMode = {changeMode} dark={dark} />
        <Navbar />
        <Switch>
        <Route exact path="/" component={Blogs} />
        <Route exact path="/about" component={About} />
        <Route exact component={Error} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
