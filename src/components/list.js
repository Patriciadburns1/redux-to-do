import React,{Component} from 'react'; 
import {connect} from 'react-redux';  
import {getData} from '../actions'; 
//anywhere interacting with redux in our react - we need to import connect 
// trying to call our action creator that gets our list data from the server 
// properly use our action/ dispatch an action to something
//even a method called dispatch 


class List extends Component{
    componentDidMount(){
        this.props.getData(); 
    }
    render(){
    console.log("list props", this.props.list); 
    const listElements = this.props.list.map(item => {
        return <li className="collection-item" key={item._id}> {item.title} </li>
    }); 
        return(
            <div>
            <h1 className="center"> TO DO LIST (REDUX) </h1>
            <ul className="collection"> {listElements}</ul>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        list: state.list.all
    }
}

// connect takes two arguments  - mapstate to props connects us with redux state / then action creators  as object 
// version of getData is on our props now 
export default connect(mapStateToProps, {getData:getData})(List); 
