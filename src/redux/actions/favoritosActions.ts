import { getToken, urlAxios } from "../../utils";

const { token } = getToken();
export const GET_FAVORITES = "GET_FAVORITES"

export const getFavorites=()=>{
    return async(dispatch:Function)=>{
        try {
            const { data } = await urlAxios(`/${token}/favorites`)
            dispatch({type:GET_FAVORITES, payload: data})
        } catch (error:any) {
            console.log(error.message)
        }
    }
}