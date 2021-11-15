import React, {useContext, useState} from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import {UsernameContext} from '../UsernameContext';
import { AuthenticateContext } from '../AuthenticateContext';
import ScrollToTop from '../components/ScrollToTop';
import {ChatEngine, MessageFormSocial, getMyData} from 'react-chat-engine';
import { PasswordContext } from '../PasswordContext';
import Footer from '../components/Footer';
import axios from 'axios';

const Chatroom = () => {
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
    const {username} = useContext(UsernameContext);
    const {password} = useContext(PasswordContext);
    const {authenticate, setAuthenticate} = useContext(AuthenticateContext);
    const togglelight = ()=>{
        return setLightTheme(!lightTheme);
    };
    const toggleauthenticate = ()=>{
        return setAuthenticate(!authenticate);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const onSubmitDelete =(DeleteData)=>{
        var result = window.confirm("Are you sure you want to delete account?");
        if (result == true){
            axios.delete(
                "https://api.chatengine.io/users/me/",
                {header:{"Private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
            ).then(response =>{
                alert("Deleted user")
              })
            // let temp = {"username":username}
            // let Obj = {...temp, ...DeleteData}
            // fetch("http://localhost:3333/user/delete",{
            //     method: "DELETE",
            //     headers:{"Content-Type":"application/json",'Accept': 'application/json'},
            //     body:JSON.stringify(Obj)
            // }).then((res) => res.json()).then((result)=>{
            //     if (result == true){
            //         alert("Account Deleted")
            //         let secret = JSON.stringify(DeleteData,["password"]).slice(13,-2)
            //         axios.delete(
            //             "https://api.chatengine.io/users/{{user_id}}/",
            //             {'username':username},
            //             {header:{"Private-key":""}}
            //         )
            //     }
            //     else{
            //         alert("Incorrect password")
            //     }
            // })
        }
    }

    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} lightTheme={lightTheme}/>
            <Navbar2 toggle={toggle} lightTheme={lightTheme} togglelight={togglelight} toggleauthenticate={toggleauthenticate}/>
            <FlexDiv>
                <ChatEngine
                    height='92vh'
                    userName={username}
                    userSecret={password}
                    projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
                    renderNewMessageForm={()=><MessageFormSocial/>}
                />
                <button onClick={onSubmitDelete}>Delete Account</button>
                {/* <Footer/> */}
            </FlexDiv>
        </>
    );
}

export default Chatroom