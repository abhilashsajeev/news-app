import React from 'react';
import {Route} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white'
};

export default ({label, location})=>(
  <Route render={({ history }) => (
    <FlatButton
      label={label}
      style={buttonStyle}
      onClick={() => { history.push(location) }} />

  )} />
);