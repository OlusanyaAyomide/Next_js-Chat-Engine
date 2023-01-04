import React, { useState, createContext } from "react";

const AllContext = createContext({
  username: "",
  setusername: function () {},
  secret: "",
  setsecret: function () {},
});
export function ContextProvider(props) {
  const [username, setuserrname] = useState("");
  const [secret, setsecret] = useState("");
  function changeUsername(prop) {
    setuserrname(prop);
  }
  function changeSecret(prop) {
    setsecret(prop);
  }
  const context = {
    username,
    setusername: changeUsername,
    secret,
    setsecret: changeSecret,
  };
  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );
}

export default AllContext;
