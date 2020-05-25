import React from 'react';
import {Button, DatePicker, Form, Input, Select, Upload} from 'antd';
import styles from './index.less';
import {MoneyCollectOutlined, UploadOutlined} from '@ant-design/icons';

const {Option} = Select;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

const Step1 = () => {

  const [form] = Form.useForm();
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        layout="horizontal"
        className={styles.stepForm}
        hideRequiredMark
      >
        <Form.Item
          label="项目名"
          name="projectName"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="分类"
          name="category">
          <Select>
            <Option value="painting">绘画</Option>
            <Option value="video">影视</Option>
            <Option value="artifact">手工艺</Option>
            <Option value="food">食品</Option>
            <Option value="word">文字</Option>
          </Select>
        </Form.Item>
        <Form.Item label="项目介绍" name="description">
          <Input.TextArea/>
        </Form.Item>
        <Form.Item label="目标金额" name="targetMoney">
          <Input addonBefore={<MoneyCollectOutlined/>}/>
        </Form.Item>
        <Form.Item
          label="起止时间"
          name="receiverName"
        >
          <DatePicker.RangePicker
            showTime={{format: 'HH:mm'}}
            format="YYYY-MM-DD HH:mm"
            onChange={() => {
            }}
            onOk={()=>{}}
          />
        </Form.Item>
        <Form.Item label="收款码" name="qrCode">
          <Upload>
            <Button>
              <UploadOutlined /> 上传二维码
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
};

export default Step1;
