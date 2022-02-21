import   {getbook,getCartItem,getwishlistItems}  from "./books";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    getbook,
    getCartItem,
    getwishlistItems,
});

export default rootReducer;