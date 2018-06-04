import React from 'react'

class DetailPane extends React.Component{
    render(){
        return(
            <div className="detailsForm">
                <section>
                    <label>File Name</label>
                    <input type="text" disabled value={this.props.details.fileName}/>
                </section>
                <section>
                    <label>Developer</label>
                    <input type="text" disabled value={this.props.details.changed_by}/>
                </section>
                <section>
                    <label>Reviewer</label>
                    <input type="text" disabled value={this.props.details.reviewer} />
                </section>
                <section>
                    <label>Field Name</label>
                    <input type="text" disabled value={this.props.details.fieldName} />
                </section>  
            </div>          
        )
    }
}

export default DetailPane;