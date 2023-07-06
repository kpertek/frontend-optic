import axios from "axios";

const API_URL = "http://localhost/api/";

const register = (vorname, nachname, email, password, onSuccess, onFail) => {
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
      let data = response.data;
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));

      if(onSuccess !== undefined) onSuccess(data);
      notifyUserObs(data);
    },
    (error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        if(onFail !== undefined) onFail(resMessage);
    }
  );
};

const login = (email, password, onSuccess, onFail) => {
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

      if(onSuccess !== undefined) onSuccess(response.data);
      notifyUserObs(response.data);
    }),
    (error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        if(onFail !== undefined) onFail(resMessage);
    }
};

const logout = () => {
  localStorage.removeItem("user");
  //hier fehlt serverseitiges Löschen
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

/*
* UserObserver
*/

const userObserver = [];

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
  attachUserObs,
  removeUserObs,
};

export default AuthService;
