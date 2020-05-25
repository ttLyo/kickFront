import React, { Component } from "react"
import Title from "./children/title"
import Summary from "./children/summary"
import Information from "./children/informaton"
import axios from "../../util/axios"
import "./detail.scss"
class detail extends Component {
    componentDidMount(){
        console.log(this.props.match.params)
        axios.get("getByPid").then(res=>{
            console.log(res)
        })
    }
    back=()=>{
        window.history.back()
    }
    render(){
        return (
            <div className="detail">
                <Title />
                <Summary />
                <Information />
            </div>
        )
    }
}
export default detail