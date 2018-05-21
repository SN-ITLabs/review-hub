import React from 'react';
import '../css/Persona.css';
import ReviewerContent from './ReviewerContent';
import '../css/ReviewerContent.css';

export default class Persona extends React.Component{
    constructor(props, context) {
        super(props);
        this.state = {
            'tabs': [
                {
                    'name': 'Home',
                    'className': 'Persona-li-active'
                },
                {
                    'name': 'Reviewer',
                    'className': 'Persona-li'
                },
                {
                    'name': 'Developer',
                    'className': 'Persona-li'
                }
            ],
            'activeTab': 'Home'
        };
        this.getTabs = this.getTabs.bind(this);
    }


    makeTabActive(tabName) {
        var self = this;
        var activeTab = this.state.activeTab;
        var updateTabs = this.state.tabs;
        updateTabs.forEach(function(tab) {
            var tabs = self.state.tabs;
            if(tab.name == tabName) {                
                tab.className = 'Persona-li-active';
                activeTab = tab.name;
            }else {
                tab.className = 'Persona-li';
            }
        })
        console.log('tabs = ' + JSON.stringify(updateTabs));
        this.setState({tabs: updateTabs, activeTab: activeTab});
    }    

    getMainContent() {
        var content;
        switch(this.state.activeTab) {
            case 'Home': 
                content = (<div>In Home page</div>);
                break;
            case 'Reviewer':
                content = (<ReviewerContent/>);
                break;
            case 'Developer': 
                content = (<div>In Developer page</div>);
                break;
        }
        console.log(content);
        return content;
    }

    getTabs() {
        var tabs2render = [];
        var self = this;
        this.state.tabs.forEach(function(tab) {
            tabs2render.push((<li className={tab.className} onClick={() => self.makeTabActive(tab.name)} key={tab.name}>{tab.name}</li>));
        })
        return tabs2render;
    }

    render(){
        var mainContent = this.getMainContent();    
        var tabs = this.getTabs();

        return(
            <div>
                <ul className="Persona-ul">   
                    {tabs}                 
                </ul>   
                <ul className="ContentArea">      
                    {mainContent}
                </ul>
            </div>
        );
    }
}