import React, {FC, SyntheticEvent, useEffect, useState} from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import {withRouter} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../shared/constants/constants";
import {addUserInfo, editUserInfo, getUserInfoById} from "../../actions/userinfo.action";
import {UserInfo} from "../../shared/models/userInfo";
import {userInfo} from "os";


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


const UserInfos: FC<UserInfosProps> = () => {

    const userState = useSelector((state:any)=>state?.user);
    console.log('userState', userState);
    const [details, setDetails] = useState<any>({});
    console.log('detailsssssssssss', details);


    const handleFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const infoCopy = {
            ...details,
            [inputEle.id]: inputEle.value
        };
        setDetails(infoCopy);
    }

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();

    useEffect(() => {
        if(userState?.userInfo?.user?.userInfo) {
            setDetails(userState.userInfo.user.userInfo)
            console.log('inside useEffect', details)
        }

    },[]);

    const clickHandler = () => {
        dispatch(editUserInfo(details));
    }

    const clickHandler2 = () => {
        console.log("adduserinfo", details);
        dispatch1(addUserInfo(details));
    }

    const submitHandler = (event: SyntheticEvent) => {
        console.log('submithandler');
        event.preventDefault();
        dispatch(editUserInfo(details));
        dispatch1(addUserInfo(details));
    }

    return (
        <Form
            onFinish={submitHandler}
            {...layout} name="nest-messages"
            validateMessages={validateMessages}
        >
            <h2>Personal Info</h2>
            <Form.Item name={['userinfo', 'name']} label="Name" rules={[{ required: true }]}>
                <Input id="name" value={details.name} placeholder={details.name} onChange={handleFormControl}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input id="email" value={details.email} placeholder={details.email} onChange={handleFormControl}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'phone']} label="phone" rules={[{ type: 'string' }]}>
                <Input id="phone" value={details.phone} placeholder={details.phone} onChange={handleFormControl}></Input>
            </Form.Item>
            <Form.Item name={['userinfo', 'address']} label="address">
                <Input.TextArea id="address" value={details.address} placeholder={details.address} onChange={handleFormControl}></Input.TextArea>
            </Form.Item>
            {
                userState?.userInfo?.user?.userInfo?
                    <Form.Item name={['userinfo', 'update']} label="Update">
                        <Button onClick={clickHandler}>Update</Button>
                    </Form.Item> :
                    <Form.Item name={['userinfo', 'submit']} label="Submit">
                        <Button onClick={clickHandler2}>Submit</Button>
                    </Form.Item>
            }

            {/*<Form.Item name={['userinfo', 'submit']} label="Submit">*/}
            {/*    <Button onClick={clickHandler}>Submit</Button>*/}
            {/*</Form.Item>*/}
        </Form>
    );
};

// const mapStateToProps = ({userInfo}: ReduxState) => {
//     console.log('{userinfo}', {userInfo})
//     return {userInfo};
// };

export default connect()(UserInfos);

interface UserInfosProps {
    match?:any;
    userInfo: UserInfo;
}