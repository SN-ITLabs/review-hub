
export default function Activity(state={
    contentMode: "ActivityStream",
    comments : [],
    changeDetails : {},
    changeComments : [],
    changeHistory : [],
    upwardHierarchy : [],
    showDelegation : false
},action){

    switch(action.type){
        case 'SET_CONTENT_MODE': {
            console.log('in setContentMode Reducer!');
            var mode = action.payload;
            if(!mode) {
                mode = 'Differ'
            }
            state = {...state,contentMode:mode}
            break;
        }
        case 'LOAD_COMMENTS':{
            state = {...state,comments:action.payload};
            break;
        }   
        case 'GET_CHANGE_PROPERTY':{
            state = {
                ...state,
                changeDetails:action.payload.fileInfo,
                changeComments: action.payload.comments,
                changeHistory : action.payload.reviewHistory
            };
            break;
        }
        case 'UPWARD_HANDLERS':{
            state = {
                ...state,
                upwardHierarchy:action.payload,
                showDelegation : true
            };
            break;
        }
        case 'HIDE_DELEGATION':{
            state = {
                ...state,
                showDelegation : action.payload
            };
            break;
        }
        
    }

    return state;
}