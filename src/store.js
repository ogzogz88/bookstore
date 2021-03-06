import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookListReducers, bookDetailsReducers } from "./reducers/bookReducers";
import { schoolListReducers } from "./reducers/schoolReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
    bookList: bookListReducers,
    bookDetails: bookDetailsReducers,
    schoolList: schoolListReducers,
    userLogin: userLoginReducer,
    cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : []

const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;