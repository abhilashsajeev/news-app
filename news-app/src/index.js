import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RootComponent = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)


ReactDOM.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
