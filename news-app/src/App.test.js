import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme()
it('renders without crashing', () => {
  shallow(<App />, {
    context: {muiTheme}
  });
});




