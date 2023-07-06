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
                <input type="text" placeholder="E-Mail-Adresse" name="email" value={email} onChange={onChangeEmail}/>
                <input type="text" placeholder="Passwort" name="password" value={password} onChange={onChangePassword}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login;