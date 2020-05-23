import React, { Component } from "react"
import {Link} from "react-router-dom"
import itemjpg from "../../images/123.jpeg"
class itemList extends Component {
    render(){
        return (
            <div className="itemList">
                {[1,2,3,4,5,6].map((item)=>(
                        <Link to={"/detail/"+item} className="item" key={item}>
                            {/* <div> */}
                                <img src={itemjpg} alt="img"/>
                                <p className="title">some title</p>
                                <p>author</p>
                                <p>content</p>
                            {/* </div> */}
                        </Link>

                    ))}
            </div>
        )
    }
}
export default itemList