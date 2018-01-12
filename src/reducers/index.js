import { combineReducers } from 'redux'
import fetchCountriesReducer from './reducer_countries_list';
import countriesGoldReducer from './reducer_countries_gold';
import countriesSilverReducer from './reducer_countries_silver';
import countriesBronzeReducer from './reducer_countries_bronze';
import countriesTotalReducer from './reducer_countries_total';


const reducers = combineReducers({
  countries: fetchCountriesReducer,
  gold: countriesGoldReducer,
  silver: countriesSilverReducer,
  bronze: countriesBronzeReducer,
  total: countriesTotalReducer
})

export default reducers;
