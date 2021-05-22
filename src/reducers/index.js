import { combineReducers } from 'redux'

import planetsReducer from "./planets";
import starShipsReducer from "./starships";
import charactersReducer from "./characters";

export default combineReducers({
  planets: planetsReducer,
  starships: starShipsReducer,
  characters: charactersReducer,
});
