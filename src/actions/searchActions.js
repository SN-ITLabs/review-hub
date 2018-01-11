// write your actions here

export function fetchDefaultSearchCriteria(){
    return{
        type:'DEFAULT_SEARCH',
        payload:{
            teams : ["My UpdateSets","My Team UpdateSets","My Coleges"]
        }
    }
}

export function getAllUpdateSets(){
    return{
        type:'FETCH_ALL_UPDATE_SETS',
        payload:{
            updateSetList : [{
                name : 'Updateset 1',
                sys_id:'484994',
                payload:{},
                description:'this is my test updateset',
                files:[
                    {
                       name:"ppdevuitl.js",
                       sys_id:"748484",
                       description:"provides the utility functions for the pp"
                    },
                    {
                        name:"deputil.js",
                        sys_id:"48944",
                        description:"provides the dep functions for the pp"
                    }
                ]
            },
            {
                name : 'Updateset 2',
                sys_id:'4849956',
                payload:{},
                description:'another update set to testing the values',
                files:[
                    {
                       name:"ppdevuitl.js",
                       sys_id:"748484",
                       description:"provides the utility functions for the pp"
                    },
                    {
                        name:"deputil.js",
                        sys_id:"48944",
                        description:"provides the dep functions for the pp"
                    }
                ]
            },
            {
                name : 'Updateset 3',
                sys_id:'48499474',
                payload:{},
                description:'keep the track of deploymnet testing',
                files:[
                    {
                       name:"ppdevuitl.js",
                       sys_id:"748484",
                       description:"provides the utility functions for the pp"
                    },
                    {
                        name:"deputil.js",
                        sys_id:"48944",
                        description:"provides the dep functions for the pp"
                    }
                ]
            },
            {
                name : 'Updateset 4',
                sys_id:'48493738',
                payload:{},
                description:'implementing opportuntiy testings',
                files:[
                    {
                       name:"ppdevuitl.js",
                       sys_id:"748484",
                       description:"provides the utility functions for the pp"
                    },
                    {
                        name:"deputil.js",
                        sys_id:"48944",
                        description:"provides the dep functions for the pp"
                    }
                ]
            },
            {
                name : 'Updateset 5',
                sys_id:'3033030',
                payload:{},
                description:'contracts reagaring ps vendors',
                files:[
                    {
                       name:"ppdevuitl.js",
                       sys_id:"748484",
                       description:"provides the utility functions for the pp"
                    },
                    {
                        name:"deputil.js",
                        sys_id:"48944",
                        description:"provides the dep functions for the pp"
                    }
                ]
            }]
        }
    }
}