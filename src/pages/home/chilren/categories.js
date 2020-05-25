import React, { Component } from "react"
import itemjpg from "../../images/123.jpeg"
import Productoin from "../../common/prodution"
class categories extends Component {
    componentDidMount(){
    }
    render(){
        let categoriesTypes=["绘画","影视","手工艺","食品","文字"]
        return (
            <div className="categories">
                {categoriesTypes.map((type, index)=>(
                    <div key={index}>
                    <h2>{type}</h2>
                    <div className="categoriesItem">
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
                ))}
            </div>
        )
    }
}
export default categories