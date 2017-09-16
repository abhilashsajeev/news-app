import { LOAD_NEWS, CLEAR_CURRENT_NEWS, REPLACE_NEWS, DELETE_NEWS } from '../constants/constants';

const initState = {
  allNews: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_NEWS:
      return {
        ...state,
        allNews: action.payload
      };
    case CLEAR_CURRENT_NEWS: // todo: can be removed after react-redux-form
      return {
        ...state
      }
    case REPLACE_NEWS:
      return {
        ...state,
        allNews: state.allNews.map(t => t.id === action.payload.id ? action.payload : t)
      }
    case DELETE_NEWS: 
    return {
      ...state,
      allNews: state.allNews.filter(n => n.id !== action.payload)
    }
    default:
      return state;
  }
}