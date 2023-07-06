import React, { useEffect, useState } from "react";
import AuthService from "../../../services/auth.service";
import { fetchUserData } from "../../../common/Requests";

const Profil = () => {
  const currentUser = AuthService.getCurrentUser();
  const [user, setUser] = useState(undefined);

  useEffect(() => {    
    AuthService.attachUserObs(setUser);

    return () => AuthService.removeUserObs(setUser);
  }, []);

  if(!AuthService.isLoggedIn() || user === undefined)
  {
    return (
      <div>Sie haben sich leider nicht angemeldet</div>
    )
  }
  else{
    return (
      <div>Vorname: {user.vorname}</div>
    );
  }
};

export default Profil;
