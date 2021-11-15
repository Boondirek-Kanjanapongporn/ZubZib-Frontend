import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import { AuthenticateContext } from '../AuthenticateContext';
import LoginSection from '../components/LoginSection';
import ScrollToTop from '../components/ScrollToTop';
import { UsernameContext } from '../UsernameContext';

const Home = () => {
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
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


    return (
        <>  
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} lightTheme={lightTheme}/>
            <Navbar toggle={toggle} lightTheme={lightTheme} togglelight={togglelight}/>
            <FlexDiv>
                <LoginSection lightTheme={lightTheme} toggleauthenticate={toggleauthenticate}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Home