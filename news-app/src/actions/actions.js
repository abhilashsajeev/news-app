import { LOAD_NEWS, CLEAR_CURRENT_NEWS, REPLACE_NEWS, DELETE_NEWS } from '../constants/constants';
import { getNews, addNews, updateNews, removeNews } from '../lib/newsService';

export const loadNews = (news) => {
  return {
    type: LOAD_NEWS,
    payload: news
  }
};

export const fetchNews = () => {
  console.log('calling fetchnews')
  return async (dispatch) => {
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
    const { allNews } = getState().news;
    const news = allNews.find(i => id === i.id)
    const updatedNews = { ...news, isPublished: !news.isPublished };
    const res = await updateNews(updatedNews);
    dispatch(replaceNews(res.news))
  }
}

export const removeNewsFromState = (news) => {
  return {
    type: DELETE_NEWS,
    payload: news
  }
}
export const deleteNews = (id) => {
  return async (dispatch) => {
    const res = await removeNews(id);
    dispatch(removeNewsFromState(res));
  }
}