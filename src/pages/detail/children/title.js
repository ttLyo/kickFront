import React, { Component } from "react"
import { PageHeader } from 'antd';
class title extends Component {
    back=()=>{
        window.history.back()
    }
    render(){
        return (
            <div className="title">
                <PageHeader
                className="site-page-header"
                onBack={this.back}
                title="Title"
                />
                <h1>TITLE</h1>
                <p className="description">
                    some description some descriptionsome description some descript
                    ionsome description some descriptionsome description some description
                </p>
            </div>
        )
    }
}
export default title