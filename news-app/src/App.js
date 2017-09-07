import React, { Component } from 'react';
import './App.css';
import Appbar from 'material-ui/AppBar';
import NewsList from './components/NewsList';
import NewsAdmin from './components/NewsAdmin';
import NewsPublic from './components/NewsPublish';
import Message from './components/Snakbar';
import Link from './components/Link';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const rightButtons = (
      <div>
        <Link label="Home" location="/home" />
        <Link label="Admin" location="/admin" />
        <Link label="Publish" location="/publish" />
      </div>
    );

    return (
      <div className="App">
        <Router>
          <div>
            <Appbar
              title="Redux news app"
              iconElementRight={rightButtons}
              iconElementLeft={<span></span>}
            />
            <Route path="/home" render={() => (
              <NewsList />
            )} />

            <Route path="/admin" render={() => (
              <NewsAdmin />
            )} />

            <Route path="/publish" render={() => (
              <NewsPublic />
            )} />
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            
          </div>
        </Router>
        <Message/>
      </div>
    );
  }
}

export default App;
