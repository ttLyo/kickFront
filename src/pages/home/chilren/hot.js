import React, { Component } from "react"
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
class hot extends Component {
    render(){
        return (
            <div className="hot">
                <h3>今日热门</h3>
                <div className="hotList">
                        {[1,2,3,4].map((item,index)=>(
                            <Productoin 
                            key={index}
                            id={index}
                            img={itemjpg} 
                            title="some title" 
                            author="some author" 
                            content="some content" />

                        ))}
                </div>
                
            </div>
        )
    }
}
export default hot