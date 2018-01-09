// make this review.js reducer as combine reducer by using the 
// below code

/*
import {combineReducers} from 'redux';

// import the reduces which are being combined here
*/


export default function reducer(state={
  // configure the default state 
  userInfo:{},
  searchCriteria:[],
  updateSets:[]
},action){
   
    // update the state and return the state based on the action type
    // uncomment below code to handle the state actions
    // use action.payload to get the payload information
    
    switch(action.type){
        case 'DEFAULT_SEARCH':{
            state =  {...state,searchCriteria:action.payload.teams};
            break;
        }
        case 'ADD_COMMENT':{
            break;
        }
        case 'UPDATE_COMMENT':{
            break;
        }
        case 'DELETE_COMMENT':{
            break;
        }
    }
   
    return state;
}