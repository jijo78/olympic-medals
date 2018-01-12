import * as actions from '../actions/constants';

export default function(state=[], action){
  switch (action.type) {
    case actions.SORT_TOTAL:
    const total = action.payload;
    const sortedData = total.results.sort((a,b)=>{ return a.total > b.total ? -1 : 1}).filter((item)=>{ return (item.total >=11 && item.gold >=2 && item.silver >=3)})
      return {
        ...state,
        total: sortedData
      }  
  }
  return state;
}