import   {getbook,getCartItem,getwishlistItem}  from "./books";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    getbook,
    getCartItem,
    getwishlistItem,
});

export default rootReducer;