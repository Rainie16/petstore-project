import {SyntheticEvent, useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {checkLogin, getUserByUsername, login} from "../actions/auth.action";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ReduxState} from "../shared/constants/constants";
import "./Login.scss"

const Login = (props:RouteComponentProps) => {

    const [user, setUser] = useState({
        username:'',
        password:'',
    });

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const handleFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const userCopy = {
            ...user,
            [inputEle.name]: inputEle.value
        };
        setUser(userCopy);
    };

    const submitHandler = (event: SyntheticEvent) => {
        if(!user.username || !user.password){
            alert('Please enter your username and password')
        } else {
            event.preventDefault();
            dispatch(login(user));
        }

    };

    // const loginState = useSelector((state:any)=>state?.isLogin);
    //console.log("curr user", currUser);
    const userState = useSelector((state:any)=> state?.user);
    //console.log('mmmmmmmmmmmm',user1);

    console.log('userState', userState);

    useEffect(() => {
        //const isLoggedin =!!localStorage['user'] && JSON.parse(localStorage['user'])?.success;
        //console.log("isloggedin",isLoggedin );
       // if(currUser.user?.success == false){
        const task = async() =>{
            if(!!userState?.isLogin){
                await dispatch1(checkLogin());
                props.history.push('/')
            }
        }
        task();

    },[userState]);

    return(

        <form className="sign-in" onSubmit={submitHandler}>
            <h2 className="title">I already have an account</h2>
            <div>Sign in with your username and password</div>
            <div><input name="username" placeholder="username" value={user.username} onChange={handleFormControl} type="text"/></div>
            <div><input name="password" placeholder="password" value={user.password} onChange={handleFormControl} type="password"/></div>
            <button className="btn btn-primary">Login</button>
        </form>
    );
};

// const mapStateToProps = ({user}: ReduxState) => {
//     return {user};
// }
//
// const mapDispatchToProps = (dispatch: any) => ({
//     handleGetUser: () => dispatch(checkLogin()),
// });

export default connect()(Login);
// export default withRouter(connect(null, mapDispatchToProps)(Login));

interface LoginProps {
    handleGetUser?:()=>void;
}