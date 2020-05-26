import React, { Component } from "react"
import { Carousel, Button, Modal, InputNumber, message } from 'antd';
import axios from "../../../util/axios"
class summary extends Component {
    constructor(){
        super()
        this.state={
            IsShowSupport:false,
            money:100,
        }
    }
    handleCancel=()=>{
        this.setState({IsShowSupport:false})
    }
    showSupport=()=>{
        this.setState({IsShowSupport:true})
    }
    support=()=>{
        if(localStorage.getItem("username")==""){
            message.info("您未登录",2)
        }
        console.log(this.props)
        let data={
            pid:this.props.pid,
            donor:localStorage.getItem("username"),
            donee:this.props.author,
            money:this.state.money
        }
        axios.post("addDonation",JSON.stringify(data)).then(res=>{
            console.log(res)
            if(res.data.code==200){
                message.info("成功")
                window.location.reload()
            }
        })
    }
    handleChange=(e)=>{
        // console.log(e)
        this.setState({money:e})
    }
    render(){
        return (
            <div className="summary">
                <div className="carousel" >
                    <Carousel >
                        <div>
                        <h3>pic1</h3>
                        </div>
                        <div>
                        <h3>pic2</h3>
                        </div>
                        <div>
                        <h3>pic3</h3>
                        </div>
                    </Carousel>
                </div>
                <div className="titleInfo">
                    <h3>目标:</h3>
                    <h2 className="target"> ￥{this.props.targetMoney}</h2>
                    <h3>已募集:</h3>
                    <h2 className="now">￥{this.props.currentMoney}</h2>
                    <Button block size="large" onClick={this.showSupport}>支持作品</Button>
                    {/* <h3>剩余时间: 26H</h3> */}
                    <h3 className="timeLeft">截止时间: {this.props.endTime}</h3>
                </div>
                <Modal width={400}
                    title="支持作品"
                    visible={this.state.IsShowSupport}
                    onOk={this.support}
                    onCancel={this.handleCancel}
                    >
                    <p className="thancks">感谢您的支持！</p>
                    支持金额：￥<InputNumber min={1} value={this.state.money} onChange={this.handleChange} />
                </Modal>
            </div>
        )
    }
}
export default summary