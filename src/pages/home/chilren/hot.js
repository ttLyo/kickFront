import React, { Component } from "react"
import { Link } from 'react-router-dom'
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
class hot extends Component {
    render(){
        return (
            <div className="hot">
                <h3>今日热门</h3>
                <div className="hotList">
                    {[1,2,3,4].map((item)=>(
                        <Link to={"/detail/"+item} className="hotItem" key={item}>
                            <Productoin 
                            img={itemjpg} 
                            title="some title" 
                            author="some author" 
                            content="some content" />
                            {/* <div> */}
                                {/* <img src={itemjpg} alt="img"/>
                                <p className="title">some title</p>
                                <p>author</p>
                                <p>content</p> */}
                            {/* </div> */}
                        </Link>

                    ))}
                </div>
                
            </div>
        )
    }
}
export default hot