
const initialState=10;


 const getbook =(state = [],action)=>{
    switch(action.type){
        case "GetBooks" : return {...state,books : action.payload}
        default : return state;
        break;
    }
}

export default getbook