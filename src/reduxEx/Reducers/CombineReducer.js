import { combineReducers } from "redux";
import PlayerOneReducer from "./PlayerOne";
import PlayerTwoReducer from "./PlayerTwo";

const reducers=combineReducers({
    playerone:PlayerOneReducer,
    playertwo:PlayerTwoReducer
})
export default reducers;