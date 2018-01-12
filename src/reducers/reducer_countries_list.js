import * as actions from '../actions/constants';

export default function(state=[], action){
  switch (action.type) {
    case actions.FETCH:
    const countries = action.payload;
    const sortedData = countries.results.sort((a,b)=>{ return a.gold < b.gold ? 1 : -1 }).filter((item)=>{ return item.gold >=4; });
    
      return {
        ...state,
        countries: sortedData
      }
  }
  return state;
}
