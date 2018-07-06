//need helper methods - class component 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {sendTodoItem} from '../actions'; 
import {connect} from 'react-redux'; 

class AddItem extends Component {

   async handleAddItem(values) {
        // console.log("Form.values:", values);
      await  this.props.sendTodoItem(values); 
      //route to a new location 
      this.props.history.push('/'); 
    }

    renderInput({label,input, meta :{touched , error }}) {

    // const {label, input, meta:{touched, error}}= props;
    
        return (
            <div className="col s8 offset-s2">
                <label> {label} </label>
                <input {...input} type="text" autoComplete="off"/>
                <p className="red-text"> {touched && error} </p>  
            </div>
        )
    }

    render() {
       
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center"> Add item </h1>
                <div className="row right-align">
                    <Link className="btn pink" to="/"> View to do items </Link>
                </div>
                <form onSubmit={handleSubmit(this.handleAddItem.bind(this))}>
                    <div className="row">
                        <Field name="title" component={this.renderInput} label="Title"/>
                    </div>
                    <div className="row">
                        <Field name="details" component={this.renderInput} label="Item Details"/>

                    </div>
                    <div className="row right-align" > 
                    <button className="btn">  Add item </button> 
                    </div> 
                </form>
            </div>
        );
    }
}

//error handling define a function // get values from form 
function validate(values){
    const{title, details} = values; 
    const errors ={}; 
    if (!title){
        errors.title= 'Please add a title.'; 
    }

    if(!details){
        errors.details ="Please add details about your to do item."; 
    }

    return errors; 
}

AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, {sendTodoItem: sendTodoItem}) (AddItem); 