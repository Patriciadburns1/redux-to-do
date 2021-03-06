import types from './types'; 
import axios from 'axios'; 

// make actions folder/ make types folder / make default object to import types into actions 

const BASE_URL= 'http://api.reactprototypes.com'; 
const API_KEY= "?key=c418Patricia"; 

export function getData(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`); 
    return{
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function sendTodoItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    return {
        type: types.ADD_ITEM, 
        payload: response
    }
}

export function getSingleItem(id){
    const response= axios.get(`${BASE_URL}/todos/${id}${API_KEY}`)
    return{
        type: types.VIEW_ITEM,
        payload: response
    }
}