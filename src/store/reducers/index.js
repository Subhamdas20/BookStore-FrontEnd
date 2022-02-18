import   {getbook,getCartItem}  from "./books";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    getbook,
    getCartItem,
});

export default rootReducer;