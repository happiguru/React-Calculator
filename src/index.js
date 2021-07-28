import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/quotes';
import App from './components/App';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quotes" component={Quote} />
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
