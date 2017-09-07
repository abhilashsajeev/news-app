import {SHOW_MESSAGE, LOAD_NEWS, PUBLISH_NEWS, 
  UNPUBLISH_NEWS, DELETE_NEWS, REPLACE_NEWS} from '../constants/constants';

const initState = '';
export const showMessage = (val)=> ({type: SHOW_MESSAGE, payload: val});

export default (state = '', action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case LOAD_NEWS:
    case PUBLISH_NEWS:
    case UNPUBLISH_NEWS:
    case REPLACE_NEWS:
    case DELETE_NEWS:
      return '';
    default:
      return state;
  }
}