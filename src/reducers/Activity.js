
export default function Activity(state={
    contentMode: "ActivityStream",
    comments : []
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
    }

    return state;
}