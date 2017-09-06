import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPublishedNews, fetchNews, publishNews, deleteNews} from '../actions/actions';
import NewsItem from './NewsItem';
class NewsPublic extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const news = this.props.news;
    return (
      <div>
        {news.map((newsItem)=> (
          <NewsItem key={newsItem.id} 
            publishNews={this.props.publishNews}
            deleteNews = {this.props.deleteNews}
            isAdminOnly={true}
            {...newsItem}/>
        ))}
      </div>
    )
  }
} 


export default connect(
  (state) => ({ news: getPublishedNews(state.news.allNews, false) }),
  { fetchNews, publishNews, deleteNews }
)(NewsPublic)