import * as actions from '../actions/constants';

export default function(state=[], action){
  switch (action.type) {
    case actions.SORT_BRONZE:
    const bronze = action.payload;
    const sortedData = bronze.results.sort((a,b)=>{ return a.bronze < b.bronze ? 1 : -1}).filter((a)=> { return a.bronze >=5})

      return {
        ...state,
        bronze: sortedData
      }  
  }
  return state;
}