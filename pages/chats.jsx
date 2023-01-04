import React,{useState,useEffect,useContext} from "react";
import AllContext from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic"
const ChatEngine = dynamic(() =>
import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const {username,setusername,secret} = useContext(AllContext)
  const [showchat,setShowchat] = useState()
  useEffect(() => {
    if (typeof document !== undefined) {
      setShowchat(true);
    }
  }, []);
  useEffect(() => {
    if (username === "" || secret === "") {
    push("/");
    }
  }, [username, secret]);
  if (!showchat) return <div>Loadingg.....</div>;
  return (<div className="background">
  <div className="shadow">
    <ChatEngine
      height="calc(100vh - 212px)"
      projectID="3ef4ae92-db25-4d2e-8618-ef130d49d9d2"
      userName={username}
      userSecret={secret}
      renderNewMessageForm={() => <MessageFormSocial />}
    />
  </div>
</div>);
}
