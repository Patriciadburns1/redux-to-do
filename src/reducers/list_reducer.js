//first thing import types into reducer 
//reducer is a function 

import types from '../actions/types'; 

const DEFAULT_STATE = {
    all: []
}

// two parameters - state , then takes in action - es6 default parameters ( if state is null use DEFAULT_STATE)
//where our action is going to end up 
// whatever is returned is the new state - the whole point of the reducer   

export default ( state=DEFAULT_STATE, action )=>{
// switch statement goes into reducer - decision is made from action.type 
    switch(action.type){
        case types.GET_LIST_DATA:
            console.log("get list data", action);
            return {...state, all: action.payload.data.todos}; 
        default:
        return state; 
    }
}

