import { LOAD_NEWS, CLEAR_CURRENT_NEWS, REPLACE_NEWS, DELETE_NEWS } from '../constants/constants';
import { getNews, addNews, updateNews, removeNews } from '../lib/newsService';
import { showMessage } from '../reducers/message';

export const loadNews = (news) => {
  const data = news.length > 0? news: [];
  return {
    type: LOAD_NEWS,
    payload: data
  }
};

export const fetchNews = () => {
  
  return async (dispatch) => {
    dispatch(showMessage('Loading news'))
    const news = await getNews();
    dispatch(loadNews(news));
  }
};


export const getPublishedNews = (news, filter) => {
  if (filter) {
    news = news.filter(i => i.isPublished)
  }
  return news || [];
}

export const clearCurrentNews = (news) => {
  return {
    type: CLEAR_CURRENT_NEWS
  }
}

export const createNews = (news) => {
  return async (dispatch) => {
    dispatch(showMessage('Adding news...'))
    const status = await addNews(news);
    dispatch(clearCurrentNews(status));
  }
}


export const replaceNews = (news) => {
  return {
    type: REPLACE_NEWS,
    payload: news
  }
}

export const publishNews = (id) => {
  return async (dispatch, getState) => {
    dispatch(showMessage('Publishing news...'));
    const { allNews } = getState().news;
    const news = allNews.find(i => id === i.id)
    const updatedNews = { ...news, isPublished: !news.isPublished };
    const res = await updateNews(updatedNews);
    dispatch(replaceNews(res))
  }
}

export const removeNewsFromState = (id) => {
  return {
    type: DELETE_NEWS,
    payload: id
  }
}
export const deleteNews = (id) => {
  return async (dispatch) => {
    dispatch(showMessage('Deleting news news...'));
    const res = await removeNews(id);
    if(res.status === 200){
      dispatch(removeNewsFromState(id));
    }
    
  }
}