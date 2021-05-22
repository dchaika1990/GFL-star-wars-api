import { combineReducers } from 'redux'

import planetsReducer from "./planets";
import starShipsReducer from "./starships";

export default combineReducers({
  planets: planetsReducer,
  starships: starShipsReducer,
});
