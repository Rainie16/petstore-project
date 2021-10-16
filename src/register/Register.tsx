import {SyntheticEvent, useState} from "react";
import {register} from "../actions/auth.action";
import Pets from "../user-details/pet/Pets";
import Paymentinfo from "../user-details/payment-info/Paymentinfo";

const Register = () => {
    const [user, setUser] = useState({
        username:'',
        password:'',
        confirmPassword:''
    });

    console.log(user);

    const handleFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const userCopy = {
            ...user,
            [inputEle.name]: inputEle.value
        };
        console.log(user);
        setUser(userCopy)
    }

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if(user.password !== user.confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try{
            setUser(user);
            register({username:user.username, password:user.password});
            console.log("does it able to show?" , user)
        }catch(error) {
            console.error(error);
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <h4>I do not have an account</h4>
            <span>sign up with your username and password</span>
            <input name="username" placeholder="username" value={user.username} onChange={handleFormControl} type="text"/>
            <input name="password" placeholder="password" value={user.password} onChange={handleFormControl} type="password"/>
            <input name="confirmPassword" placeholder="confirm password" value={user.confirmPassword} onChange={handleFormControl} type="password"/>
            <button>Register!</button>
            <Pets/>
            <Paymentinfo/>
        </form>
    );
};

export default Register;