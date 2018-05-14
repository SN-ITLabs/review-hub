import React from "react";
import { connect } from "react-redux";

import CircularProgress from 'material-ui/CircularProgress';

import { fetchDefaultSearchCriteria, getAllUpdateSets, getChangeSetsForReview } from "../actions/SearchActions";

import AutoComplete from "material-ui/AutoComplete";

import UpdateSetList from "./UpdateSetList";

import UserProfileList from "./UserProfileList";

import { SNAjax } from "../util/globalhelper";


//import Differ from './DifferCom';
/*
@connect((store)=>{
    return {
        searchCriteria : store.searchCriteria.searchCriteria
    }
})*/

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            reviewer: {},
            fetching:false
         };
    }

    componentWillMount() {
        this.props.dispatch(fetchDefaultSearchCriteria());
    }

    handleonClose = value => {
        //this.props.dispatch(getAllUpdateSets())
        //alert(value);
        this.props.dispatch(getChangeSetsForReview());
    };

    handleUpdateSetProfiles(reviewe) {
        // this.setState({
        //     profiles: userProfiles
        // });
        this.setState({
            reviewer: reviewe
        });
    }

    handleReviewers(reviewe) {
        this.setState({
            reviewer: reviewe
        });
    }

    render() {
        const { searchCriteria, updateSetList, changeSetsList } = this.props;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="mainContent col-sm-9 col-xs-9 col-md-9 col-lg-9">
                        <AutoComplete
                            hintText="Type Search key word"
                            dataSource={searchCriteria}
                            onNewRequest={this.handleonClose.bind(this)}
                            filter={AutoComplete.fuzzyFilter}
                            floatingLabelText="Search"
                            fullWidth={true}
                        />
                        { this.props.fetching ? <CircularProgress className="loading_icon"/>  : null}
                        <UpdateSetList
                            changeSets={changeSetsList}
                            profileHandler={this.handleUpdateSetProfiles.bind(this)}
                            reviewHandler={this.handleReviewers.bind(this)}
                        />
                        {/* <UpdateSetList updateSets={updateSetList} profileHandler={this.handleUpdateSetProfiles.bind(this)}/> */}
                        {/* <Differ className="differ" /> */}
                    </div>
                    <div className="leftContent col-sm-3 col-xs-3 col-md-3 col-lg-3">
                        <UserProfileList reviews={this.state.reviewer} />
                    </div>
                </div>
            </div>
        );
    }
}

const stateMap = state => {
    return {
        searchCriteria: state.searchCriteria,
        updateSetList: state.updateSets,
        changeSetsList: state.changeSets,
        fetching: state.fetching
    };
};

export default connect(stateMap)(MainContainer);
