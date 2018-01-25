import React from 'react';
import {connect} from 'react-redux';

import {fetchDefaultSearchCriteria,getAllUpdateSets} from '../actions/searchActions';

import AutoComplete from 'material-ui/AutoComplete';

import UpdateSetList from './UpdateSetList';

import UserProfileList from './userProfileList';

/*
@connect((store)=>{
    return {
        searchCriteria : store.searchCriteria.searchCriteria
    }
})*/

class MainContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profiles : []
        }
    }
  
    componentWillMount(){
        this.props.dispatch(fetchDefaultSearchCriteria())
    }
    
    handleonClose = (value) => {
        this.props.dispatch(getAllUpdateSets())
    };

    handleUpdateSetProfiles(userProfiles){
        this.setState({
            profiles: userProfiles
        });
       // alert(profiles.length);
    }

    render(){
        const {searchCriteria,updateSetList} = this.props;
        
        return(
           <div className="container">
              <div className="row">
                <div className="mainContent col-sm-9 col-xs-9 col-md-9 col-lg-9">
                        <AutoComplete
                            hintText="Type Search key word"
                            dataSource={searchCriteria}
                            onClose={this.handleonClose}
                            filter={AutoComplete.fuzzyFilter}
                            floatingLabelText="Search"
                            fullWidth={true}
                        />
                        <UpdateSetList updateSets={updateSetList} profileHandler={this.handleUpdateSetProfiles.bind(this)}/>
                </div> 
                <div className="leftContent col-sm-3 col-xs-3 col-md-3 col-lg-3">
                    <UserProfileList userProfiles={this.state.profiles}/>
                </div>
             </div>
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
