import React, { Component } from "react"
import Title from "./children/title"
import Summary from "./children/summary"
import Information from "./children/informaton"
import axios from "../../util/axios"
import "./detail.scss"
class detail extends Component {
    constructor(){
        super()
        
        this.state={
            name:"",
            author:"",
            image:"",
            startTime:"",
            endTime:"",
            instruction:"",
            targetMoney:"",
            currentMoney:"",
            qrCode:"",
            isEnded:false,
            isChecked:false,
            isFinished:false
        }
    }
    componentDidMount(){
        this.getInfo(this.props.match.params.id)
    }
    getInfo=(id)=>{
         axios.get("project/getByPid?pid="+id).then(res=>{
            console.log(res)
            this.setState(res.data.data)
        })
    }
    render(){
        return (
            <div className="detail">
                <Title name={this.state.name} instruction={this.state.instruction} />
                <Summary 
                    targetMoney={this.state.targetMoney} 
                    currentMoney={this.state.currentMoney}
                    endTime={this.state.endTime}
                    pid={this.state.pid}
                    author={this.state.author}
                />
                <Information />
            </div>
        )
    }
}
export default detail