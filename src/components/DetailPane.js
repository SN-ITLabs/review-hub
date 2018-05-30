import React from 'react'

class DetailPane extends React.Component{
    render(){
        return(
            <table className="table-detail">
                <tr>
                    <td className="table-head">File Name</td><td>{this.props.details.fileName}</td>
                    <td className="table-head">Field Name</td><td>{this.props.details.fieldName}</td>
                </tr>
                <tr>
                    <td className="table-head">Reviewer</td><td>{this.props.details.reviewer}</td>
                    <td className="table-head">Developer</td><td>{this.props.details.changed_by}</td>
                </tr>
            </table>
        )
    }
}

export default DetailPane;