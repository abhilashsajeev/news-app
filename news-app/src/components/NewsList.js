import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPublishedNews, fetchNews, publishNews} from '../actions/actions';
import NewsItem from './NewsItem';
class NewsLIst extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const news = this.props.news;
    return (
      <div>
        {news.map((newsItem)=> (
          <NewsItem key={newsItem.id} publishNews={this.props.publishNews}
            {...newsItem}/>
        ))}
      </div>
    )
  }
} 


export default connect(
  (state) => ({ news: getPublishedNews(state.news.allNews, true) }),
  { fetchNews, publishNews }
)(NewsLIst)