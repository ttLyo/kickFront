import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from "./pages/common/header"
import Home from "./pages/home/home"
import Detail from "./pages/detail/detail"
import Person from "./pages/person/person"
import Category from "./pages/category/category"
import LoginAndRegister from "./pages/loginAndRegister/loginAndRegister"
import Footer from "./pages/common/footer"
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/person/:id" component={Person} />
          <Route path="/category/:id" component={Category} />
          <Route path="/loginAndRegister" component={LoginAndRegister} />
        </Switch>
      <Footer />
      
    </HashRouter>
  );
}

export default App;
