import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchMenuItems} from '../actions/fetchMenuItems';
import MenuList from '../components/MenuList'


class MenuItemsContainer extends Component {
    componentDidMount(){
        this.props.fetchMenuItems();
   
       }
    render() { 
        return ( 
            <div>
                <br></br>
                <br></br>
               
               <Route exact path='/menu' render ={ () =><MenuList menuitems={this.props.menuitems}/>}/>
                
            </div>
         );
    }
}

const mapStateToProps =(state) =>{
    //console.log("this is just state for menu", state)
    //console.log("This is THE state for menu", state.menuz.menu_items)
    
    return {menuitems: state.menuz.menu_items}
    

}
 
export default connect(mapStateToProps,{fetchMenuItems})(MenuItemsContainer);