import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';
import { AuthenticateContext } from '../AuthenticateContext';

const Contact = () => {
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

    function NavbarRender(){
        if (authenticate){
            return <Navbar2 toggle={toggle} lightTheme={lightTheme} togglelight={togglelight} toggleauthenticate={toggleauthenticate}/>
        }
        else{
            return <Navbar toggle={toggle} lightTheme={lightTheme} togglelight={togglelight}/>
        }
    };

    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} lightTheme={lightTheme}/>
            {NavbarRender()}
            <FlexDiv>
                <ContactSection lightTheme={lightTheme}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Contact