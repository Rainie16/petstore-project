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

    // useEffect( ()=>{
    // const handleGetData =  async () => {
    //     dispatch(checkLogin());
    //     try{
    //         const result: any = await (!!handleGetUser && handleGetUser);
    //         if (result?.payload.status === 200) {
    //             setDetails(result?.payload.data);
    //             console.log("what is details", details);
    //             console.log("login result", result);
    //         }else throw result.payload;
    //     } catch (error) {
    //         console.log ("fail to login!");
    //     }
    // }
    // handleGetData();
    // })

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const handleFormControl = (event: SyntheticEvent) => {
        const inputEle = event.target as HTMLInputElement;
        const userCopy = {
            ...user,
            [inputEle.name]: inputEle.value
        };
        setUser(userCopy);
        //console.log(user);
    };

    const submitHandler = (event: SyntheticEvent) => {
        if(!user.username || !user.password){
            alert('Please check your username or password')
        } else {
            event.preventDefault();
            dispatch(login(user));
        }

    };

    // const loginState = useSelector((state:any)=>state?.isLogin);
    //console.log("curr user", currUser);
    const userState = useSelector((state:any)=> state?.user);
    //console.log('mmmmmmmmmmmm',user1);

    console.log('userSt', userState);

    useEffect(() => {
        //const isLoggedin =!!localStorage['user'] && JSON.parse(localStorage['user'])?.success;
        //console.log("isloggedin",isLoggedin );
       // if(currUser.user?.success == false){
        const task = async() =>{
            if(!!userState?.isLogin){
                await dispatch1(checkLogin());
                console.log("check_login", userState);
                //      dispatch(getUserByUsername(user.username));
                //      setDetails( getUserByUsername(user.username));
                // const handleGetData =  async () => {
                //
                //         const result: any = await (!!handleGetUser && handleGetUser);
                //             dispatch(checkLogin());
                //             setDetails(result.payload?.data);
                //             console.log("what is details", details);
                //             console.log("login result", result);
                //
                //     }
                // handleGetData();
                props.history.push('/')
            }
        }
task();

    },[userState]);

    return(

        <form onSubmit={submitHandler}>

            <h2>I already have an account</h2>
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