import React from 'react'

class SlackIntegrator extends React.Component{
    constructor(props){
        super(props);
        this.setChangeReviewMode();
    }

    setChangeReviewMode(){
        const params = new URLSearchParams(this.props.location.search)
        const changeId = params.get('changeId')
        const fieldName = params.get('fieldName')
        
        this.props.setContentMode("Differ")
        this.props.toggleDifferComp(changeId,'',fieldName)
        this.props.getReviewDet(changeId)
        this.props.switchPersona('Reviewer')
    }
    

    render(){
        return(
            <div></div>
        )
    }
}

export default SlackIntegrator;