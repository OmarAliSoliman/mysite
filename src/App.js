import React, {useState, useEffect, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import ScrollArea from 'react-scrollbar';

// sass
import './sass/style.scss';
import Settingbox from './components/Settingbox';

// Pages
// import Blogs from './pages/Blogs';
// import About from './pages/About';
// import Error from './pages/Error';
import Loader from './components/Loader';
const Blogs = lazy(()=> import("./pages/Blogs"));
const About = lazy(()=> import("./pages/About"));
const Error = lazy(()=> import("./pages/Error"));

// Components
// import Header from './components/Header';
// import Navbar from './components/Navbar';
const Navbar = lazy(()=> import("./components/Navbar"));
const Header = lazy(()=> import("./components/Header"));


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
        <Suspense fallback={<Loader />}>
          <Settingbox dark={dark} />
          <Header changeMode = {changeMode} dark={dark} />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route exact path="/about" component={About} />
            <Route exact component={Error} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
