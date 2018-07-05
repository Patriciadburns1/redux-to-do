//first thing import types into reducer 
//reducer is a function 

import types from '../actions/types'; 

const DEFAULT_STATE = {
    all: []
}

// two parameters - state , then takes in action - es6 default parameters ( if state is null use DEFAULT_STATE)
export default ( state=DEFAULT_STATE, action )=>{
// switch statement goes into reducer - decision is made from action.type 
    switch(action.type){
        default:
        return state; 
    }
}

