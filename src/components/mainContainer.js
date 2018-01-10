import React from 'react';
import {connect} from 'react-redux';

import {fetchDefaultSearchCriteria} from '../actions/searchActions';

import AutoComplete from 'material-ui/AutoComplete';

import UpdateSetList from './UpdateSetList';

/*
@connect((store)=>{
    return {
        searchCriteria : store.searchCriteria.searchCriteria
    }
})*/

const updateSetList = [{
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

class MainContainer extends React.Component{
  
    componentWillMount(){
        this.props.dispatch(fetchDefaultSearchCriteria())
    }
    
   handleUpdateInput = (value) => {
    this.setState({
       dataSource: []
        });
   };

    render(){
        const {searchCriteria} = this.props;

        return(
            <div className="mainContent container">
                <AutoComplete
                hintText="Type Search key word"
                dataSource={searchCriteria}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText="Search"
                fullWidth={true}
                />
                <UpdateSetList updateSets={updateSetList}/>
          </div> 
        );
    }
}

const stateMap = (state) => {
    return {
        searchCriteria : state.searchCriteria
    };
};

export default connect(stateMap)(MainContainer);