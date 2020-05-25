import React, { Component } from "react"
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
import { Link } from 'react-router-dom'
class categories extends Component {
    componentDidMount(){
    }
    render(){
        let categoriesTypes=["绘画","影视","手工艺","食品","文字"]
        return (
            <div className="categories">
                {categoriesTypes.map((type, index)=>(
                    <div key={index} id={type}>
                    <Link to={"/category/"+index} className="typeName">{type}</Link>
                    <div className="categoriesItem">
                        {[1,2,3,4,5,6,7,8].map((item,index)=>(
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
                ))}
            </div>
        )
    }
}
export default categories