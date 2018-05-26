import React from 'react';

import '../css/PropertiesPane.css'

class PropertiesPane extends React.Component{

    constructor(props, context) {
        super(props);        
        this.state = {                    
        }
    }

    render(){
        return( <div class="propertiesPane">
                        <div class="tabsPane">
                            <div class="activeTab">Details</div>
                            <div class="Tab">Guided Checklist</div>
                            <div class="Tab">Review History</div>
                        </div>
                    </div>         
            );
    }
}

export default PropertiesPane;