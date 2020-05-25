import React, { Component } from "react"
import { Link } from 'react-router-dom'
import itemjpg from "../../images/123.jpeg"
class categories extends Component {
    componentDidMount(){
    }
    render(){
        let categoriesTypes=["绘画","影视","手工艺","食品","文字"]
        return (
            <div className="categories">
                {categoriesTypes.map((type)=>(
                    <div>
                    <h2>{type}</h2>
                    <div className="categoriesItem">
                        {[1,2,3,4].map((item)=>(
                            <Link to={"/detail/"+item} className="production" key={item}>
                                {/* <div> */}
                                    <img src={itemjpg} alt="img"/>
                                    <p className="title">some title</p>
                                    <p>author</p>
                                    <p>content</p>
                                {/* </div> */}
                            </Link>

                        ))}
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default categories