import React from 'react';

import '../css/PropertiesPane.css'

import DetailPane from './DetailPane'
import CommentsPane from './CommentsPane'
import ReviewHistory from './ReviewHistory'
// import Recommendations from './Recommendations'


class PropertiesPane extends React.Component{

    constructor(props, context) {
        super(props);

        this.state = {    
            activeTab: 'Details',
            tabs: ['Details','Recommendations', 'Review History', 'Comments']
        }
        this.makeTabActive = this.makeTabActive.bind(this);
    }

    componentDidMount(){
        this.props.propertyDetails(this.props.change);
    }

    makeTabActive(tabName) {
        this.setState({activeTab: tabName});
    }

    getContent() {
        var content;
        switch(this.state.activeTab) {
            case 'Details': 
                content = (<DetailPane details={this.props.changeDetails}/>);
                break;
            case 'Recommendations':
                content = (<div> In Recommendations </div>);
                break;
            case 'Review History': 
                content = (<ReviewHistory/>);
                break;
            case 'Comments': 
                content = (<CommentsPane comments={this.props.changeComments}/>);
                break;
                
        }
        return content;
    }

    render(){

        var tabsPane = [];
        var self = this;
        var tabContent = this.getContent();
        this.state.tabs.forEach(function(tabObj) {
            if(tabObj == self.state.activeTab) {
                tabsPane.push(<div className="activeTab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }else {
                tabsPane.push(<div className="Tab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }
        });

        return( 
                <div class="propertiesPane">
                        {tabsPane}
                        {tabContent}
                </div> 
        );
    }
}

export default PropertiesPane;