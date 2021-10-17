import {SyntheticEvent, useEffect, useState} from "react";
import {login, register} from "../actions/auth.action";
import {connect, useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router-dom";

const Register = (props: RouteComponentProps) => {

    // const newUser = useSelector((state:any) => state?.user);

    const [user, setUser] = useState({
        username:'',
        password:'',
        confirmPassword:''
    });

    // console.log("Component newUser", newUser);

    const dispatch = useDispatch();
   // const dispatch1 = useDispatch();

    const handleFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const userCopy = {
            ...user,
            [inputEle.name]: inputEle.value
        };
        setUser(userCopy)
    }

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        if(user.password !== user.confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try{
            // setUser(user);
            dispatch(register(user));
            props.history.push( "/");

        }catch(error) {
            console.error(error);
        }
    }

    // const unpw = {username: user.username, password: user.password}

    // useEffect(() => {
    //         if(newUser?.success == true){
    //             console.log("register component user", user);
    //             dispatch1(login(unpw));
    //         }
    //
    // },[user]);

    return(
        <form onSubmit={submitHandler}>
            <h4>I do not have an account</h4>
            <span>sign up with your username and password</span>
            <input name="username" placeholder="username" value={user.username} onChange={handleFormControl} type="text"/>
            <input name="password" placeholder="password" value={user.password} onChange={handleFormControl} type="password"/>
            <input name="confirmPassword" placeholder="confirm password" value={user.confirmPassword} onChange={handleFormControl} type="password"/>
            <button>Register!</button>
        </form>
    );
};

// const mapDispatchToProps = (dispatch: any) => ({
//     handlerRegister: (user:{username:string, password:string}) => dispatch(register(user))
// })



export default connect()(Register);