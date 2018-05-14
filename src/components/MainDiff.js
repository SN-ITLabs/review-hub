import React from 'react';

import Differ from '../components/DifferCom';

class MainDiff extends React.Component{
   
    render(){
        return(
            <section className="main">
               { this.props.showDiffer ? <Differ className="differ" /> : <p className="main-text">Please select a file to see the difference</p>}
            </section>
        )
    }
}

export default MainDiff;