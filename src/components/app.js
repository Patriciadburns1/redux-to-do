import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import List from './list'; 
import {Route} from 'react-router-dom';
import AddItem from './add_item'; 
import ViewItem from './view_item'; 

const App = () => (
   
        <div className="container">
            <Route exact path="/" component={List}/> 
            <Route path="/add-item" component={AddItem}/> 
            <Route path="/todo/:item_id" component={ViewItem}/>
        </div>
    
);

export default App;
