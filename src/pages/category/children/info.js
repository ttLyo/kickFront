import React, { Component } from "react"
import { Carousel } from 'antd';
class info extends Component {
    render(){
        return (
            <div className="info">
                <div className="carousel" >
                    <Carousel autoplay>
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
                    <h1>绘画:</h1>
                    <p className="words">意存笔先，画尽意在。——唐·张彦远</p>
                </div>
            </div>
        )
    }
}
export default info