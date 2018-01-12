import * as actions from '../actions/constants';

export default function(state=[], action){

  switch (action.type) {

    case actions.SORT_SILVER:

    const silver = action.payload;
    const sortedData = silver.results.sort((a,b)=>{ return a.silver < b.silver ? 1 : -1}).filter((item)=> { return item.silver >=4})
      return {
        ...state,
        silver: sortedData
      }  
  }
  return state;
}