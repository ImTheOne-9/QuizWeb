import { useState } from "react";
import "../Auth/Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../Services/apiService";
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

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
        if (!username) {
            toast.error('Name is required');
            return;
        }
        const data = await postRegister(email, password, username);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            navigate('/login');
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an account yet?</span>
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>
            <div className="title col-3 mx-auto">
                Quizzes
            </div>
            <div className="welcome col-3 mx-auto">
                Start your journey?
            </div>
            <div className="content-form col-3 mx-auto">
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
                <div className="form-group pass-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type={!isShowPassword ? "password" : "text"}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    {!isShowPassword ?
                        <span className="icons-eye" onClick={() => setIsShowPassword(true)} ><VscEyeClosed /></span>
                        :
                        <span className="icons-eye" onClick={() => setIsShowPassword(false)} ><VscEye /></span>
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="username">User name</label>
                    <input
                        type={"text"}
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)} />
                </div>
                <span className="forget-password">Forget password?</span>
                <div>
                    <button
                        type={"submit"}
                        className="btn-submit"
                        onClick={() => handleSubmit()}>
                        Register
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
export default Register;