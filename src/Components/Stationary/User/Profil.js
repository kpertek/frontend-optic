import React, { useEffect, useState } from "react";
import AuthService from "../../../services/auth.service";
import userEvent from "@testing-library/user-event";
import { fetchData, fetchUserData } from "../../../common/Requests";

const Profil = () => {
  const currentUser = AuthService.getCurrentUser();
  const [test, setTest] = useState(undefined);

  useEffect(() => {    
    fetchUserData("user/" + currentUser.id, setTest);
  }, []);

  if(currentUser === undefined || currentUser.access_token === undefined || test === undefined)
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
