import { useState } from "react";
import "../Auth/Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../Services/apiService";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner9 } from "react-icons/im";
import "nprogress/nprogress.js";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async () => {
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error('Password is required');
            return;
        }
        setIsLoading(true);
        const data = await postLogin(email, password);
        if (data && data.EC == 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/');

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);
        }
    }
    return (
        <div className="login-container">
            <div className="header">
                <span>Dont't have an account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Quizzes
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        id="email"
                        placeholder="Enter username"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className="forget-password">Forget password?</span>
                <div>
                    <button
                        type={"submit"}
                        className="btn-submit"
                        onClick={() => handleSubmit()}
                        disabled={isLoading}>
                        {isLoading === true &&
                            <ImSpinner9 className="loaderIcon" />
                        }
                        <span>Login to Quizzes</span>
                    </button>
                </div>
                <div className="text-center">
                    <span
                        className="back"
                        onClick={() => navigate('/')}>Go to home page</span >
                </div>
            </div>
        </div>
    )
}
export default Login;