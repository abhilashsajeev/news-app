import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/RaisedButton';
const avatarStyle = {
  borderRadius: '1%',
  width: '60px',
  height: '60px'
};

class NewsItem extends Component {
  handleDelete = () => {
    this.props.deleteNews(this.props.id)
  }
  handlePublish = () => {
    this.props.publishNews(this.props.id);
  }
  render() {
    const { title, description, id, thumbnail, image, body, date } = this.props;
    let PublishButton, DeleteButton;
    if(this.props.isAdminOnly) {
      DeleteButton = <Button onClick={this.handleDelete}>UnPublish</Button>;
      if(this.props.isPublished)
        PublishButton = <Button onClick={this.handlePublish}>UnPublish</Button>;
      else
        PublishButton = <Button onClick={this.handlePublish}>Publish</Button>;
    } else {
      PublishButton = '';
      DeleteButton = '';
    }
    return (
      <Paper zDepth={1} style={{ marginTop: '10px' }}>
        <Card>
          <CardHeader
            title={title}
            avatar={<Avatar style={avatarStyle} src={thumbnail}></Avatar>}
            subtitle={description}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardMedia expandable={true}
            overlay={<CardTitle title={title} />}
          >
            <img src={image} alt="" />
          </CardMedia>
          <CardTitle title={title} subtitle={`Published on : ${new Date(date)}`}
            expandable={true} />
          <CardText expandable={true}>
            {body}
          </CardText>
          {PublishButton}
          {DeleteButton}
        </Card>
      </Paper>
    )
  }
}


export default NewsItem;