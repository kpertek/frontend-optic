import axios from "axios";

const API_URL = "http://localhost/api/";

const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  });
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
