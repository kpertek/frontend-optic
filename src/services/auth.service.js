import axios from "axios";

const API_URL = "http://localhost/api/";

const register = (vorname, nachname, email, password) => {
  return axios.post(API_URL + "register", {
    vorname,
    nachname,
    email,
    password,
  })
  .then(
    (response) => {
      //hier ggf. nur eine Erfolgsmeldung oder direkt einloggen
      // setMessage(JSON.stringify(response.data));
      //setMessage(response.data.message);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    },
    (error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }
  );
};

const login = (email, password) => {
  return axios
/*      .post(API_URL + "login", null, {
        //TODO: Achtung: schickt als Get-Parameter, sichtbar in der URL
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        params: { email: name, password: password },
      })*/
      .post(API_URL + "login", {
        email,
        password,
      })
    .then((response) => {
      //einfaches debug
      console.log("debug-info:");
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  //hier fehlt serverseitiges Löschen
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
