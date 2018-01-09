// write your actions here

export function fetchDefaultSearchCriteria(){
    return{
        type:'DEFAULT_SEARCH',
        payload:{
            teams : ["My UpdateSets","My Team UpdateSets","My Coleges"]
        }
    }
}