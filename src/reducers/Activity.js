
export default function Activity(state={
    contentMode: "ActivityStream",
    comments : [],
    changeDetails : {},
    changeComments : [],
    changeHistory : [],
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
    }

    return state;
}