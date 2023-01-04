import React, { useContext } from "react";
import AllContext from "../context";
import { useRouter } from "next/router";
import axios from "axios"


export default function Auth() {
  const Allctx = useContext(AllContext)
  const {push} = useRouter()
  const handleSubmit=(event)=>{
    event.preventDefault()
    const{username,secret} = Allctx
    if (secret.trim().length < 7 || username.length < 4){return}
    axios.put("https://api.chatengine.io/users/",
    {username,secret},
    {headers:{"Private-key":"bac93db3-2c3a-4405-915d-481883fc0541"}}).then((r)=>{
      push("/chats")
    })
  }
  const handleChange=(event)=>{
    if(event.target.name === "email"){ Allctx.setusername(event.target.value) }
    else{Allctx.setsecret(event.target.value)}

  }
  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-title">Next Js chats</div>
        <div className="input-container">
          <input type="text" placeholder="Email" name="email" className="text-input" onChange={handleChange} value={Allctx.username}/>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Password" name="password" className="text-input" onChange={handleChange} value={Allctx.secret}/>
        </div>
        <button className="submit-button">Login / SignUp</button>
      </form>
    </div>
  </div>;
}
