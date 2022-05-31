import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import inputReducer from "./Features/Input/reducer";


let rootReducers = combineReducers({
    input: inputReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;