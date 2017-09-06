import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import newsReducer from './reducers/news';
import messageReducer from './reducers/message';
import { createForms  } from 'react-redux-form';

const initialCurrentNews = {
  title: '',
  image: '',
  thumbnail: '',
  description: '',
  body: '',
  isPublished: false
};

const reducer = combineReducers({
  news: newsReducer,
  message: messageReducer,
  ...createForms ({
    current: initialCurrentNews,
  })
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));