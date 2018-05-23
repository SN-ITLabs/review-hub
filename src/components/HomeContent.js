import React from "react";
import '../css/Home.css'

export default class extends React.Component {

    render() {
        return (<div className="HomeDashboard">
                    <div className="SingleScore Score1">
                        <div className="ScoreImg">
                            <img src="images/participation.png"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Participation</div>
                    </div>
                    <div className="SingleScore Score2">
                        <div className="ScoreImg">
                            <img src="images/criticalreview.png"/>
                        </div>
                        <div className="ScoreValue">75</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Critical Review</div>
                    </div>
                    <div className="SingleScore Score3">
                        <div className="ScoreImg">
                            <img src="images/hulkscore.png"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Hulk Score</div>
                    </div>
                    <div className="SingleScore Score4">
                        <div className="ScoreImg">
                            <img src="images/sla.jpeg"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">SLA Score</div>
                    </div>
                </div>)
    }
}
