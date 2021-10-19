import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import moment from 'moment';

type SizeType = Parameters<typeof Form>[0]['size'];

const validateMessages = {
    required: '${label} is required!',
}

const Paymentinfo = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const disableDate = (current: any) => {
        return current && current < moment().endOf('day');
    };

    return (
        <>
            <h2>Add a credit card</h2>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
                validateMessages={validateMessages}
            >
                <Form.Item label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Card Number" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="CVV" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Expiration Date" rules={[{ required: true }]}>
                    <DatePicker picker="month" disabledDate={disableDate}/>
                </Form.Item>
                <Form.Item label="Submit">
                    <Button>Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Paymentinfo;