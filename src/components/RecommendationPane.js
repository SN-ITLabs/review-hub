import React from 'react'
import BestPractices from '../statics/BestPractices'
import RecommendationList from './Recommendations'

class RecommendationPane extends React.Component{
    constructor(props, context) {
        super(props);        
    }

    render(){
        console.log(this.props.changeDetails);
        var details = [];
        var categories = Object.keys(BestPractices);        
        categories.forEach(function(categoryName) {            
            if(BestPractices[categoryName] && BestPractices[categoryName].length > 0) {
                let categoryWiseLI = [];
                let bestPracticesPerCategory = BestPractices[categoryName];                
                bestPracticesPerCategory.forEach(function(bestPracticePerCategory) {
                    categoryWiseLI.push(<li className="recommentItem">{bestPracticePerCategory.description}</li>);
                });
                details.push(<React.Fragment><div className="CategoryName">{categoryName}</div><ul className="recommendList">{categoryWiseLI}</ul></React.Fragment>);
            }
        });

        return(
            <React.Fragment>
                <RecommendationList/>
            </React.Fragment>
        )
    }
}

export default RecommendationPane;