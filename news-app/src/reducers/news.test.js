import reducer from './news';
import * as types from '../constants/constants';

describe('News reducer', () => {
  it('Should set default value', () => {
    expect(reducer(undefined, {})).toEqual({
      allNews: []
    });
  });

  it('Should load news from api', () => {
    const mockNews = [
      {
        title: 'added',
      }
    ];
    expect(reducer({}, {
      type: types.LOAD_NEWS,
      payload: mockNews
    })).toEqual({
      allNews: mockNews
    });
  });

  it('should replace the news based on id', () => {
    const mockInitialState = {
      allNews: [{
        id: 1,
        title: 'Testing',
        isPublished: false
      }]
    };

    const upcomingState = {
      id: 1,
      title: 'Testing new',
      isPublished: true
    };

    expect(reducer(mockInitialState, {
      type: types.REPLACE_NEWS,
      payload: upcomingState
    })).toEqual({
      allNews: [upcomingState]
    })
  });

  it('should delete news based on id', ()=> {
    const mockInitialState = {
      allNews: [
        {
          id: 1,
          title: 'News 1',
          isPublished: true
        }, {
          id: 2,
          title: 'News 2',
          isPublished: false
        }
      ]
    };

    const expectedResult =  {
      allNews: [
        {
          id: 1,
          title: 'News 1',
          isPublished: true
        }
      ]
    };

    expect(reducer(mockInitialState, {
      type: types.DELETE_NEWS,
      payload: 2
    })).toEqual(expectedResult);

  });
})