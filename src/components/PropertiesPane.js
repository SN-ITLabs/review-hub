import React from 'react';

import '../css/PropertiesPane.css'

class PropertiesPane extends React.Component{

    constructor(props, context) {
        super(props);        
        this.state = {    
            activeTab: 'Details',
            tabs: ['Details','Recommendations', 'Review History', 'Comments']
        }
        this.makeTabActive = this.makeTabActive.bind(this);
    }

    makeTabActive(tabName) {
        this.setState({activeTab: tabName});
    }

    render(){

        var tabsPane = [];
        var self = this;
        this.state.tabs.forEach(function(tabObj) {
            if(tabObj == self.state.activeTab) {
                tabsPane.push(<div className="activeTab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }else {
                tabsPane.push(<div className="Tab" key={tabObj} onClick={()=>self.makeTabActive(tabObj)}>{tabObj}</div>);
            }
        });

        return( <div class="propertiesPane">
                        {tabsPane}
                </div>         
        );
    }
}

export default PropertiesPane;