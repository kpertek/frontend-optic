import { useState } from "react";
import AuthService from "../../../services/auth.service";

const Register = () =>
{
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeVorname = (event) =>
    {
        setVorname(event.target.value);
    }

    const onChangeNachname = (event) =>
    {
        setNachname(event.target.value);
    }

    const onChangeEmail = (event) =>
    {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) =>
    {
        setPassword(event.target.value);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        AuthService.register(vorname, nachname, email, password);
    };
    
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Vorname" name="Vorname" value={vorname} onChange={onChangeVorname}/>
                <input type="text" placeholder="Nachname" name="Nachname" value={nachname} onChange={onChangeNachname}/>
                <input type="text" placeholder="E-Mail-Adresse" name="email" value={email} onChange={onChangeEmail}/>
                <input type="text" placeholder="Geburtstag" name="Geburtstag"/>
                <input type="text" placeholder="Passwort" name="password" value={password} onChange={onChangePassword}/>
                <input type="text" placeholder="Passwort wiederholen" name="passwordRep"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;