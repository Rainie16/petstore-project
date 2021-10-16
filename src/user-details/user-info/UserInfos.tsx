import React, {FC, useEffect, useState} from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxState} from "../../shared/constants/constants";
import {getUserInfoById} from "../../actions/userinfo.action";
import {UserInfo} from "../../shared/models/userInfo";


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */


const UserInfos: FC<UserInfosProps> = ({
    userInfo,
    match,
    handleGetUserInfoById
                                     }) => {

    console.log("match", match);
    console.log('userinfo', userInfo);
    const uid = userInfo?.id;
    console.log("uid", uid);
    const id = match.params.id;
    const [details, setDetails] = useState<any>({});
    console.log('detailsssssssssss', details);
    useEffect(() => {
        const handleGetData = async () => {
            try {
                const result: any = await (!!handleGetUserInfoById &&
                    handleGetUserInfoById(id));
                if (result?.payload.status === 200) {
                    setDetails(result?.payload.data);
                    console.log('result', result);
                } else throw result.payload;
            } catch (error) {
                console.log(error)
            }
        };
        console.log("userinfo match",match)
        handleGetData();
    }, [match]);

    // const onFinish = (values: any) => {
    //     console.log(values);
    // };

    return (
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
            <h2>Personal Info</h2>
            <Form.Item name={['userinfo', 'name']} label="Name" rules={[{ required: true }]}>
                <Input placeholder={details.name}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input placeholder={details.email}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'phone']} label="phone" rules={[{ type: 'string' }]}>
                <Input placeholder={details.phone}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'address']} label="address">
                <Input.TextArea placeholder={details.address}></Input.TextArea>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = ({userInfo}: ReduxState) => {
    return {userInfo};
};


const mapDispatchToProps = (dispatch: any) => ({
    handleGetUserInfoById: (uid: number) => dispatch(getUserInfoById(uid))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserInfos));

interface UserInfosProps {
    handleGetUserInfoById?: (uid: number) => object;
    match?:any;
    userInfo: UserInfo;
}