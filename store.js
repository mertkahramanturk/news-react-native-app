import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {getRequest, getByIdRequest, loginReducer } from "./src/redux/reducers";

const reducer = combineReducers({
    //Auth
    login: loginReducer,
    //Profile
    userProfileInfo: getByIdRequest('users'),
    userAddressInfo: getRequest('accounts/user/address/list'),
    newsQueryPageList: getRequest('reference/news'),

});





const store = createStore(reducer, applyMiddleware(thunk));

export default store;
