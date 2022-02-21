
const initialState=10;


export const getbook =(state = [],action)=>{
    switch(action.type){
        case "GetBooks" : return {...state,books : action.payload}
        default : return state;
        break;
    }
}
export const getCartItem =(state = [],action)=>{
    switch(action.type){
        case "GetCartItem" : return {...state,books : action.payload}
        default : return state;
        break;
    }
}

export const getwishlistItems =(state = [],action)=>{
    switch(action.type){
        case "GetwishlistItem" : return {...state,books : action.payload}
        default : return state;
        break;
    }
}
 