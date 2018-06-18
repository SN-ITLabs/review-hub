import React from "react";
import '../css/Home.css'

export default class extends React.Component {

    render() {
        return (<React.Fragment>
                    <div className="SingleScore Score1">
                        <div className="ScoreImg">
                            <img src="/Participation.png"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Participation</div>
                    </div>
                    <div className="SingleScore Score2">
                        <div className="ScoreImg">
                            <img src="/CriticalReview.png"/>
                        </div>
                        <div className="ScoreValue">75</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Critical Review</div>
                    </div>
                    <div className="SingleScore Score3">
                        <div className="ScoreImg">
                            <img src="/HulkScore.png"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">Hulk Score</div>
                    </div>
                    <div className="SingleScore Score4">
                        <div className="ScoreImg">
                            <img src="/sla.jpg"/>
                        </div>
                        <div className="ScoreValue">25</div>
                        <div className="ScoreValueMetric">Percentile</div>
                        <div className="ScoreTitle">SLA Score</div>
                    </div>
                </React.Fragment>)
    }
}
