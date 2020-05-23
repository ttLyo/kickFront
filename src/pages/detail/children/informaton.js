import React, { Component } from "react"
import { Tabs, Comment, Tooltip, List, Descriptions, Form, Button, Input  } from 'antd';
import moment from 'moment';
const {TabPane} = Tabs
const { TextArea } = Input;
let data=[
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
        <p>
            some wordscdcccccccccadeadasadacdds
        </p>
        ),
        datetime: (
        <Tooltip
            title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
            <span>
            {moment()
                .subtract(1, 'days')
                .fromNow()}
            </span>
        </Tooltip>
        ),
    }
]
class information extends Component {
    render(){
        return (
            <div className="infomation">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="项目背景" key="1">
                        <h3>项目背景</h3>
                        <p>背背景背景背景背景背景背景背景背景234323是景</p>
                    </TabPane>
                    <TabPane tab="留言" key="2">
                        <List
                            className="comment-list"
                            header={`${data.length} replies`}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <li>
                                <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                />
                            </li>
                            )}
                        />
                        <Form.Item>
                            <TextArea rows={4}  />
                            </Form.Item>
                            <Form.Item>
                            <Button htmlType="submit"  type="primary">
                                Add Comment
                            </Button>
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="作者信息" key="3">
                        <Descriptions title="作者信息" layout="vertical">
                            <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
                            <Descriptions.Item label="电话">1810000000</Descriptions.Item>
                            <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="详细地址" span={2}>
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                            <Descriptions.Item label="详情">empty</Descriptions.Item>
                        </Descriptions>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default information