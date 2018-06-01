import React from 'react';

import {ListItem} from 'material-ui/List';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Select from 'react-select';
import '../css/UserProfile.css'
import SelectField from 'material-ui-superselectfield/es'
import FlatButton from 'material-ui/FlatButton/FlatButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { teal500, pink500, teal200, pink200, yellow500, yellow200, deepPurple500 } from 'material-ui/styles/colors';

export default class UserProfile extends React.Component{
    
    constructor(props){
        super(props);
        // keep the initization code here
        this.state = {
            showDelegation: false,
            selectedUser: [],
            allReviewers: []
        }

        this.onChange = this.onChange.bind(this);
        this.delegateReview = this.delegateReview.bind(this);
        this.hideDelegationPopup = this.hideDelegationPopup.bind(this);
    }

    delegateReview() {
        var self = this;
        this.getAllUsers().then(function(reviewers) {
            self.setState({'allReviewers': reviewers, showDelegation: true});
        });        
    }

    onChange() {
        console.log('in onChange method!');
    }

    getAllUsers() {        
        return new Promise((resolve, reject) => {                        
            resolve([{key:0, value:'user1'}, {key:1, value:'user2'}, {key:2, value:'user3'}]);
        });
    }

    getUsers (input) {
		if (!input) {
            return;
		}

		this.setState({'allReviewers': [{key:0, value:'user1'}, {key:1, value:'user2'}, {key:2, value:'user3'}]});	
    }

    hideDelegationPopup() {
        this.setState({showDelegation: false});
    }

    onRequestDelete = (key, name) => (event) => {
        this.setState({ [name]: this.state[name].filter((v, i) => i !== key) });
      };
    
    handleAutoCompleteTyping = (searchText) => {this.getUsers(searchText)};
    
    handleSelection = (values, name) => {this.setState({ selectedUser: values }); console.log('selected user = ' + values.value)}

    render(){

        const dataSourceNodes = [];
        if(this.state.allReviewers) {
            this.state.allReviewers.forEach(function(reviewer) {
                dataSourceNodes.push(<div key={reviewer.key} value={reviewer.key} label={reviewer.value}>{reviewer.value}</div>);
            });
        }
        const CustomFloatingLabel = (
        <span>
            Choose the reviewer              
        </span>
        );
    
        const customHintTextAutocomplete = (
        <span>
            Search User Name
        </span>
        );

        var delegationPopup;
        
        if(this.state.showDelegation) {
            delegationPopup = (
                    <div className="delegationPopup">                           
                        <div className="mainSelect">    
                            <div className="delegationLabel"/>                                         
                            <SelectField
                                name='delegationSelector'
                                withResetSelectAllButtons
                                floatingLabel={CustomFloatingLabel}
                                floatingLabelStyle={{ color: pink200 }}
                                floatingLabelFocusStyle={{ color: pink500 }}
                                hintTextAutocomplete={customHintTextAutocomplete}
                                underlineStyle={{ borderColor: teal200 }}
                                underlineFocusStyle={{ borderColor: teal500 }}
                                autocompleteStyle={{ color: 'red', fontSize: 25 }}
                                autocompleteUnderlineStyle={{ borderColor: yellow200 }}
                                autocompleteUnderlineFocusStyle={{ borderColor: yellow500 }}
                                hintText='Review Delegator'
                                onChange={this.handleSelection}
                                onAutoCompleteTyping={this.handleAutoCompleteTyping}
                                value={this.state.selectedUser}
                                hoverColor='rgba(3, 169, 244, 0.15)'
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                style={{ width: 200, marginTop: 20 }}
                                menuCloseButton={<FlatButton label='close' hoverColor='lightSalmon' />}
                                dropDownIcon={<ArrowDown />}
                            >{dataSourceNodes}</SelectField>
                            <div className="closeDelegation" onClick={this.hideDelegationPopup}>OK</div>
                        </div>
                    </div>);
        }


        return(
            <React.Fragment>{delegationPopup}
            <ListItem onClick={this.delegateReview}
            // primaryText={this.props.review['changed_by']} 
            primaryText={this.props.reviewers ? this.props.reviewers.changed_by : null} 
            leftIcon={<AccountCircle />}  
            primaryTogglesNestedList={true}
            secondaryText={this.props.reviewers ? this.props.reviewers.reviewer : null}
            />
            </React.Fragment>
        );
    }
}
