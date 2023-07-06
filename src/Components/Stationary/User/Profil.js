import React, { useEffect, useState } from "react";
import AuthService from "../../../services/auth.service";
import { fetchUserData } from "../../../common/Requests";

const Profil = () => {
  const currentUser = AuthService.getCurrentUser();
  const [user, setUser] = useState(undefined);

  useEffect(() => {    
    fetchUserData("user/" + currentUser.id, setUser);
  }, []);

  if(!AuthService.isLoggedIn() || user === undefined)
  {
    return (
      <div>Sie haben sich leider nicht angemeldet</div>
    )
  }
  else{
    return (
      <div>Vorname: {test.vorname}</div>
    );
  }
};

export default Profil;
