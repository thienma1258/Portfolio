import ownerReducer from "./ownerReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from 'redux'

const rootReducers =combineReducers( {
    owner: ownerReducer,
    project:projectReducer,
});

export default rootReducers;
