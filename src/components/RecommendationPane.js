import React from 'react'
import BestPractices from '../statics/BestPractices'

class RecommendationPane extends React.Component{
    constructor(props, context) {
        super(props);
    }

    render(){
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
            <div className="recommendationsPane">
                {details}
            </div>          
        )
    }
}

export default RecommendationPane;