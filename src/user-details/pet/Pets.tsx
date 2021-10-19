import React, {useEffect, useState} from 'react';
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
import {connect, useSelector} from "react-redux";
import {appConstants, ReduxState} from "../../shared/constants/constants";
import {Pet} from "../../shared/models/pet";

type SizeType = Parameters<typeof Form>[0]['size'];

const Pets = () => {

    const petState = useSelector((state:any)=>state?.user);
    console.log('petState', petState);

    const [petinfo, setPetinfo] = useState<any>({});

    useEffect(()=>{
        if(petState?.userInfo?.user?.pets) {
            setPetinfo(petState.userInfo.user.pets[0]);
            console.log('petinfo:', petState.userInfo.user.pets[0]);
        }
    }, [])

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
            labelCol={{span: 4}}
            wrapperCol={{span: 14}}
            layout="horizontal"
            initialValues={{size: componentSize}}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            >
            <Form.Item label="Name">
            <Input id="name" value={petinfo?.name} placeholder={petinfo?.name} />
            </Form.Item>
                {
                    petState?.userInfo?.user?.pets?
                    <Form.Item label="Gender">
                        <Input id="gender" value={petinfo?.gender} placeholder={petinfo?.gender} />
                    </Form.Item>
                    :
                    <Form.Item label="Gender">
                        <Select>
                            <Select.Option value="female">Female</Select.Option>
                            <Select.Option value="male">Male</Select.Option>
                        </Select>
                    </Form.Item>
                }
                {
                    petState?.userInfo?.user?.pets?
                    <Form.Item label="Breed">
                        <Input id="breed" value={petinfo?.breed} placeholder={petinfo?.breed} />
                    </Form.Item>
                        :
                    <Form.Item label="Breed">
                        <Cascader placeholder="please choose breed"
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
                }
                {
                    petState?.userInfo?.user?.pets?
                    <Form.Item label="Birthday">
                        <Input id="DOB" value={petinfo?.birthday} placeholder={petinfo?.birthday} />
                    </Form.Item>
                        :
                    <Form.Item label="Birthday">
                        <DatePicker
                            placeholder="DOB"
                            disabledDate={disableDate}
                        />
                    </Form.Item>
                }
                <Form.Item label="Add Pet">
                    <Button>Add Pet</Button>
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
