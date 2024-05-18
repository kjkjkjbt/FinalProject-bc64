import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createListing } from '../../Api';
import moment from 'moment';

export const CheckInOut = () => {
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    try {
      const listingData = {
        ...values,
        checkin: values.checkin.format('YYYY-MM-DD'),
        checkout: values.checkout.format('YYYY-MM-DD'),
        images: fileList,
      };
      await createListing(listingData);
      message.success('Listing created successfully!');
    } catch (error) {
      message.error('Error creating listing');
    }
  };

  const handleUpload = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the title' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="checkin" label="Check-in Date" rules={[{ required: true, message: 'Please choose the check-in date' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="checkout" label="Check-out Date" rules={[{ required: true, message: 'Please choose the check-out date' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Images">
        <Upload
          listType="picture"
          fileList={fileList}
          onChange={handleUpload}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload Images</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Listing
        </Button>
      </Form.Item>
    </Form>
  );
};


