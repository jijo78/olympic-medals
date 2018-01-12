import { createAction } from 'redux-actions';
import * as actions from './constants';

let res;

export function fetchData(){
  res = fetch('/medals')
      .then(response => response.json())
      .then(response => ({
          results: response
      }))
      .catch(err => {
        throw new Error(err);
      });
  return{
    type: actions.FETCH,
    payload: res
  }
}

export function sortGold(){

  return{
    type: actions.SORT_GOLD,
    payload: res
  }
}

export function sortSilver(){

  return{
    type: actions.SORT_SILVER,
    payload: res
  }
}

export function sortBronze(){

  return{
    type: actions.SORT_BRONZE,
    payload: res
  }
}

export function sortTotal(){

  return{
    type: actions.SORT_TOTAL,
    payload: res
  }
}