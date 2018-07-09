import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import List from './list'; 
import {Route, Switch} from 'react-router-dom';
import AddItem from './add_item'; 
import ViewItem from './view_item'; 
import NotFound from './not_found'; 

const App = () => (
   
        <div className="container">
            <Switch> 
                <Route exact path="/" component={List}/> 
                <Route path="/add-item" component={AddItem}/> 
                <Route path="/todo/:item_id" component={ViewItem}/>
                <Route path="/test" component={NotFound}/> 
                <Route component={NotFound}/> 
                </Switch> 
        </div>
    
);

export default App;
