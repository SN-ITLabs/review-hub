import React from 'react';
import {connect} from 'react-redux';

import {fetchDefaultSearchCriteria,getAllUpdateSets} from '../actions/searchActions';

import AutoComplete from 'material-ui/AutoComplete';

import UpdateSetList from './UpdateSetList';
import Differ from './DifferCom';
/*
@connect((store)=>{
    return {
        searchCriteria : store.searchCriteria.searchCriteria
    }
})*/

class MainContainer extends React.Component{
  
    componentWillMount(){
        this.props.dispatch(fetchDefaultSearchCriteria())
    }
    
    handleonClose = (value) => {
        this.props.dispatch(getAllUpdateSets())
   };

    render(){
        const {searchCriteria,updateSetList} = this.props;
        
        return(
            <div className="mainContent container">
                <AutoComplete
                    hintText="Type Search key word"
                    dataSource={searchCriteria}
                    onClose={this.handleonClose}
                    filter={AutoComplete.fuzzyFilter}
                    floatingLabelText="Search"
                    fullWidth={true}
                />
                <UpdateSetList updateSets={updateSetList}/>
                <Differ className="differ" />
          </div> 
        );
    }
}

const stateMap = (state) => {
    return {
        searchCriteria : state.searchCriteria,
        updateSetList : state.updateSets
    };
};

export default connect(stateMap)(MainContainer);