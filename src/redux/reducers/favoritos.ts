import { GET_FAVORITES } from "../actions/favoritosActions";

const initialState={
    favoritos:[],
};

interface Action {
    type: string;
    payload: object[];
  };

const favoritosReducer=(state = initialState, { type, payload }: Action) =>{
    switch(type){
        case GET_FAVORITES:
            return{
                ...state,
                favoritos:[...payload]
            };
        default:
            return state
    }
};
export default favoritosReducer