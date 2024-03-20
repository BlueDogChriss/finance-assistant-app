import React, { useContext, useState } from "react";
import './Login.css'
import Logo from "../../assets/Logo_finance_assistant_app.png";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
// import axios from "axios";
import { UserContext } from "../../App";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn } = useContext(UserContext);

    // const handleSubmit = async () => {
        // const { data } = await axios.post("/api/recruits/login", {
        //     email: email,
        //     password: password
        // });
        // console.log(data);
        // localStorage.setItem("token", data.token);
        // setIsLoggedIn(true);
    // };
    return (
        <>
            <div className="login">
                <form
                    className="login__container"
                    onSubmit={e => e.preventDefault()}
                >
                    <img src={Logo} alt="Logo_Finance_App" className="logo" />
                    <div className="logo-name">
                    <h2>Finance Asistant App</h2>
                    </div>
                    
                    <div className="form-group">
                        <EmailIcon className="form-icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <VpnKeyIcon className="form-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Link className="password-reset" to="/reset-password">Ai uitat parola?</Link>
                    <div className="flex">
                        <button
                            type="submit"
                            className="submit-btn"
                            // onClick={handleSubmit}
                        >
                            <Link to="/Home">
                                <ExitToAppIcon /> Login</Link>
                        </button>
                        <button
                            type="submit"
                            className="submit-btn"
                            // onClick={handleSubmit}
                        >
                            <Link to="/Register">
                                <PersonIcon /> Register</Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
