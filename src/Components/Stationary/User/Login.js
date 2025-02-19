import "./Login.css";
import { useState } from "react";
import AuthService from "../../../services/auth.service";

const Login = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) =>
    {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) =>
    {
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        AuthService.login(email, password);
    };
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="login_felder">
                    <input type="email" placeholder="E-Mail-Adresse" name="email" value={email} onChange={onChangeEmail}/>
                    <input type="password" placeholder="Passwort" name="password" value={password} onChange={onChangePassword}/>
                    <input type="submit" value="Anmelden"/>
                </div>
            </form>
        </div>
    )
}

export default Login;