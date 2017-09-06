import React, {Component} from 'react';
import {  Control, Form,  Field  } from 'react-redux-form';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton'
import Textarea from 'react-textarea-autosize';
import {createNews} from '../actions/actions';

const MyButton = (props) => <Button primary={true} {...props}>{props.children}</Button>;
const MyTextArea = (props) => <Textarea {...props} />;
const MyTextInput = (props) => <TextField style={{width: '60%'}} {...props} />;

class NewsForm extends Component {
  handleSubmit(news){
    console.log(news);
    this.props.createNews(news)
  }
  render(){
    return (
      <Form  model="current" onSubmit={(news) => this.handleSubmit(news)}>
        <Control model=".title"
          required={true}
          floatingLabelText="Title"
          component = {MyTextInput}
        />
        <br/>
        <Control model=".description"
          required={true}
          floatingLabelText="Description"
          component = {MyTextInput}
        />
        <br/>
        <Control model=".body"
          required={true}
          multiLine = {true}
          hintText="Body"
          rows = {4}
          component = {MyTextInput}
        />
        <br/>
        <Control model=".image"
          type="url"
          floatingLabelText="Image"
          component = {MyTextInput}
        />
        <br/>
        <Control model=".thumbnail"
          type="url"
          floatingLabelText="Thumbnail"
          component = {MyTextInput}
        />
        <br/>
        <br/>
        <Button type="submit" secondary={true}>Submit!</Button>
        <Control.reset model="user" className="secondary" component = {MyButton}>
          Clear Values
        </Control.reset>
      </Form >
    );
  }
}

// export default NewsForm;
export default connect(
  (state) => (state),
  {createNews}
)(NewsForm);
