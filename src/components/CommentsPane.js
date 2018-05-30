import React from 'react'

class CommentsPane extends React.Component{
    render(){
        return(
            <table className="table-comments">
            <tbody>
                <tr><th>Line Number</th><th>Description</th><th>Commented By</th></tr>
                    {
                        this.props.comments && this.props.comments.map(function(comment){
                            return(
                                <tr><td>{comment.line}</td><td>{comment.desc}</td><td>{comment.user}</td></tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default CommentsPane;