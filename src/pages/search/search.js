import React, { Component } from "react"
import Productoin from "../../common/prodution"
import axios from "../../util/axios"
class title extends Component {
    constructor(){
        super()
        this.state={
            list:{}
        }
    }
    componentDidMount(){
        this.getInfo(this.props.match.params.key)
    }
    getInfo=(key)=>{
        axios.get("getByName?name="+index).then(res=>{
            if(res.data.code===200){
                list=res.data.data
            }
        })
    }
    render() {
        const datas = this.getData();
        const { id } = this.state;
        this.items = datas[id];
        //console.log(123);
        console.log(this.items);
        return (
            <div className="itemList">
                {this.items.map((item, index) => (
                    <Productoin 
                        key={index}
                        id={index}
                        img={itemjpg}
                        title={item.title}
                        author={item.author}
                        content={item.content}
                    />

                ))}
            </div>
        )
    }
}
export default title