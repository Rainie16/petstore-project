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
import {connect} from "react-redux";
import {appConstants, ReduxState} from "../../shared/constants/constants";

type SizeType = Parameters<typeof Form>[0]['size'];

const Pets = (props: PetsProps) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const disableDate = (current: any) => {
        return current && current > moment().endOf('day');
    };

    return (
        <>
            <h2>My furry family:</h2>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
            >
                <Form.Item label="Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Gender">
                    <Select>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="male">Male</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Breed">
                    <Cascader
                        options={[
                            {
                                value: 'dog',
                                label: 'Dog',
                                children: [

                                    {
                                        value: 'american eskimo',
                                        label: 'American Eskimo',
                                    },
                                    {
                                        value: 'bulldog',
                                        label: 'Bulldog',
                                    },
                                    {
                                        value: 'chihuahua',
                                        label: 'Chihuahua',
                                    },

                                ],
                            },
                            {
                                value: 'cat',
                                label: 'Cat',
                                children: [
                                    {
                                        value: 'british short hair',
                                        label: 'British Short Hair',
                                    },
                                    {
                                        value: 'ragdoll',
                                        label: 'Ragdoll',
                                    },
                                    {
                                        value: 'scottish fold',
                                        label: 'Scottish Fold',
                                    },
                                ],

                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Birthday">
                    <DatePicker disabledDate={disableDate}/>
                </Form.Item>
                <Form.Item label="Submit">
                    <Button>Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const mapStateToProps = ({pets}:ReduxState) => {
    return {pets}
}

export default connect(mapStateToProps)(Pets);

interface PetsProps {
    dogBreed: string,
    catBreed: string,
}
