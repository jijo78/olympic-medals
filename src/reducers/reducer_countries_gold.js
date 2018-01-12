import * as actions from '../actions/constants';

export default function(state=[], action){
  switch (action.type) {
      
    case actions.SORT_GOLD:
    const gold = action.payload;
    const sortedData = gold.results.sort((a,b)=>{ return a.gold < b.gold ? 1 : -1}).filter((item)=> { return item.gold >=4})

      return {
        ...state,
        gold: sortedData
      }  
  }
  return state;
}