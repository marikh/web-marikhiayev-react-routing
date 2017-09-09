import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Home from './pages/Home/';
import About from './pages/About/';
import Products from './pages/Products/';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact/';
import NotFound from './pages/NotFound';
import { Layout } from './components/';
import CSSTransition from 'react-transition-group/CSSTransition'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


const Protected = () => (<div>Protected</div>);

const authProvider = (WrappedComponent) => {
  const isAuthenticated = false;

  return ({ match }) => (
    isAuthenticated ? 
      <WrappedComponent {...this.props } match={match}/> : 
      <Redirect to="login" />
  )
}

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={ProductPage} path="/products/:id" />
          <Route component={Products} path="/products" />
          <Route component={Contact} path="/contact" />
          <Route component={authProvider(Protected)} path="/protected"/>
          <Route render={({ match }) => 
            <CSSTransition appear in={!!match} timeout={1000} classNames="fade">
              <Layout>
                <h1>Login</h1>
              </Layout>
            </CSSTransition>
          } path="/login"/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

