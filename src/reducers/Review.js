// make this review.js reducer as combine reducer by using the 
// below code

/*
import {combineReducers} from 'redux';

// import the reduces which are being combined here
*/

export default function Review(state={
  // configure the default state 
  activeChangeNode:null,
  changeSets:{},
  fetching:false,
  relatedUpdateSets:{},
  differData:null,
  reviewers : {},
  change_id : null,
  file_id : null,
  userName : "",
  expandMode: "default",
  showLiveStream: false,
  personaTab: "Home",
  commentary: {'header':{},'data':[]},
  contentMode: 'Differ',
  reivewerNavigationTree: null,
  developerNavigationTree: null
},action){
   
    // update the state and return the state based on the action type
    // uncomment below code to handle the state actions
    // use action.payload to get the payload information
    
    switch(action.type){
        case 'SET_DEVELOPER_NAVIGATION': {
            state = {...state, developerNavigationTree:action.payload}
            break;
        }        
        case 'SET_REVIEWER_NAVIGATION': {
            state = {...state, reivewerNavigationTree:action.payload}
            break;
        }        
        case 'LOAD_COMMENTARY':{
            state = {...state,commentary:action.payload}
            break;
        }
        case 'TOGGLE_COMMENTARY': {
            state = {...state,commentary:action.payload}
            break;
        }
        case 'SWITCH_PERSONA': {
            state = {...state,personaTab:action.payload}
            break;
        }
        case 'TOGGLE_LIVE_STREAM': {
            state = {...state,showLiveStream:action.payload}
            break;
        }        
        case 'TOGGLE_DIFFER_VIEW_MODE': {
            var mode = state.expandMode;
            
            if("full_screen" == state.expandMode) {
                mode = 'default';
            }else {
                mode = 'full_screen';                
            }            

            state = {...state,expandMode:mode}
            break;
        }
        case 'SET_CONTENT_MODE': {
            console.log('in setContentMode Reducer!');
            var mode = action.payload;
            if(!mode) {
                mode = 'Differ'
            }
            state = {...state,contentMode:mode}
            break;
        }
        case 'GET_ACTIVITY_STREAM': {
            state = {...state,activityStream:action.payload.activityStream}
            break;
        }
        case 'DEFAULT_SEARCH':{
            state =  {...state,searchCriteria:action.payload.teams};
            break;
        }
        case 'FETCH_ALL_UPDATE_SETS':{
            state = {...state,updateSets:action.payload.updateSetList};
            break;
        }
        case 'FETCH_ALL_CHANGE_SETS':{
            state = {...state,changeSets:action.payload.data,fetching:false,differData:null,change_id:null,file_id:null};
            break;
        }
        case 'LOADING_INDICATOR':{
            state = {...state,fetching:action.payload.fetching};
            break;
        }
        case 'LOAD_COMMENTS':{
            state = {...state,comments:action.payload};
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
        case 'LOGIN_USER':{
            state = {...state,user:action.payload};
            break;
        }
        case 'FETCH_SETS':{
            state = {...state,relatedUpdateSets:action.payload};
            break;
        }
        case 'TOGGLE_DIFF':{
            state = {...state,differData:action.payload.differData.result,change_id:action.payload.change_id,file_id:action.payload.file_id,field_name: action.payload.field_name};
            break;
        }
        case 'GET_FILE_REVIEWERS':{
            state = {...state,reviewers:action.payload};
            break;
        } 
        case 'GET_UPDATE_SET_REVIEWERS':{
            state = {...state,reviewers:action.payload};
            break;
        }
        case 'USER_INFO':{
            state = {...state,userName:action.payload.name,userId:action.payload.id};
            break;
        }
        
    }
   
    return state;
}