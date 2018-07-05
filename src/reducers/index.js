import {combineReducers} from 'redux';
import listReducer from './list_reducer'; 

// state.list ( any properties that will be returned from root reducer )

const rootReducer = combineReducers({
        list: listReducer
}); 

export default rootReducer; 