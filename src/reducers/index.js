import {combineReducers} from 'redux';
import listReducer from './list_reducer'; 
import {reducer as formReducer} from 'redux-form'; 
// state.list ( any properties that will be returned from root reducer )

const rootReducer = combineReducers({
        list: listReducer, 
        form: formReducer 
}); 


export default rootReducer; 