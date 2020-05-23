import React, { Component } from "react"
import { Carousel, Button } from 'antd';
class summary extends Component {
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
                    <h2 className="target"> ￥2000</h2>
                    <h3>已募集:</h3>
                    <h2 className="now">￥1230</h2>
                    <Button block size="large">支持作品</Button>
                    {/* <h3>剩余时间: 26H</h3> */}
                    <h3 className="timeLeft">剩余时间: 26H</h3>
                </div>
            </div>
        )
    }
}
export default summary