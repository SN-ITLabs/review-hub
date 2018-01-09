import React from 'react';
import {connect} from 'react-redux';

import {fetchDefaultSearchCriteria} from '../actions/searchActions';

import AutoComplete from 'material-ui/AutoComplete';

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
    
   handleUpdateInput = (value) => {
    this.setState({
       dataSource: []
        });
   };

    render(){
        const {searchCriteria} = this.props;

        return(
            <div className="mainContent">
                <AutoComplete
                hintText="Type Search key word"
                dataSource={searchCriteria}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText="Search"
                fullWidth={true}
                />
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