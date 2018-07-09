import React, {Component} from 'react'; 
// import axios from 'axios'; 
import {connect} from 'react-redux'; 
import {getSingleItem} from '../actions'; 

class ViewItem extends Component{
   
    constructor(props){
        super(props); 
        this.state={
            loading: true,
            error: ''
        }
    }

    async componentDidMount(){
        const newState={
            loading:false,
            error:''
        }
        const{item_id} = this.props.match.params; 
        // console.log("item id", item_id); 
        try {
            const resp = await this.props.getSingleItem(item_id); 
            // console.log("it worked"); 
            // this.setState({
            //     loading: false,
            //     error: ''
            // })

        }
       catch(err){
        console.log('it failed'); 
        // this.setState({
        //     loading:false,
        //     error: "unable to load to do item"
        // })
        newState.error ="unable to load to do item"
       }

       this.setState(newState); 
    }

    render(){
    // console.log("view props", this.props)
    // get access to the redux store we need to use map state to props 
    const{item} = this.props; 
    const{loading, error} = this.state; 
    console.log('Item', item); 
    if(!item && loading){
        return <h1> Loading... </h1>; 
    }
    if(!loading && error){
        return <h1>{error}</h1>; 
    }
        return(
            <div>
                <h1> {item.title} </h1> 
                 <p><b> Details:</b>{item.details}</p> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        item:state.list.single
    }
}

/// pass in MapStateToProps ( deleted Null, just passing it in )
export default connect(mapStateToProps,{getSingleItem: getSingleItem})(ViewItem); 