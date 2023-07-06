import axios from "axios";
import { fetchUserData } from "../common/Requests";

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
        onLogin(response);
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
      onLogin(response);

      return response.data;
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

const logout = () => {
  localStorage.removeItem("user");
  //hier fehlt serverseitiges Löschen
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const isLoggedIn = () =>
{
  if(getCurrentUser() === undefined || getCurrentUser().access_token === undefined) return false;
  else return true;
};

const onLogin = (response) =>
{
  localStorage.setItem("user", JSON.stringify(response.data));
  fetchUserData("user/" + getCurrentUser().id, setUserData);
}

/*
* UserObserver implementation
*/

const userObserver = [];

const setUserData = (data) =>
{
  localStorage.setItem("userData", JSON.stringify(data));
  notifyUserObs(data);
}

const notifyUserObs = (data) =>
{
  userObserver.forEach((func) => func(data));
}

const attachUserObs = (callback) =>
{
  userObserver.push(callback);
}

const removeUserObs = (callback) =>
{
  userObserver.splice((item) => item !== callback);
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
  attachUserObs,
  removeUserObs
};

export default AuthService;
