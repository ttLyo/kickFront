import React from 'react';
import {InboxOutlined} from '@ant-design/icons';
import {Upload} from 'antd';

const Step3 = props => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Upload.Dragger {...props} style={{width: '500px'}}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">点击或拖动文件到此区域上传</p>
        <p className="ant-upload-hint">
          支持一个文件或多个文件上传
        </p>
      </Upload.Dragger>
    </div>
  )
};

export default Step3;
