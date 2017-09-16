import reducer from './message';
import * as types from '../constants/constants';

describe('Message state reducer ', ()=> {
  it('should return the initial state ', ()=> {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('Return the status message ', ()=> {
    expect(reducer('', {
      type: types.SHOW_MESSAGE,
      payload: 'Testing'
    })).toEqual('Testing');
  })
  it('should reset the message to empty ', ()=> {
    expect(reducer('Testing', {
      type: types.LOAD_NEWS
    })).toEqual('');
  })
})