import axios from "axios";

const API_URL = "http://localhost/api/";

const register = (vorname, nachname, email, password) => {
  
  axios.post(API_URL + "register", {
    vorname,
    nachname,
    email,
    password,
  })
  .then(
    (response) => {
        //hier ggf. nur eine Erfolgsmeldung oder direkt einloggen
        console.log(response);
    },
    (error) => {
        const resMessage =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();
    }
  )
};

const login = (email, password) => {
  return axios
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

const isLoggedIn = () =>
{
  if(getCurrentUser() === undefined || getCurrentUser().access_token === undefined || test === undefined)
  {
    return false;
  }
  else
  {
    return true;
  }
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
};

export default AuthService;
