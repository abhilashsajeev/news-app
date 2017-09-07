import React, {Component} from 'react';

import NewsForm from './NewsForm';
import Paper from 'material-ui/Paper'

class NewsAdmin extends Component{
  render(){
    return (
      <div className="News-admin">
        <Paper style={{width: '60%', margin: 'auto'}} zDepth={2}>
          <h3>News admin page</h3>
        <NewsForm />
        </Paper>
      </div>
    )
  }
}

export default NewsAdmin;