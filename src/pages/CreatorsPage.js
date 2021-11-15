import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv, CreatorsContainer } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import ScrollToTop from '../components/ScrollToTop';
import CreatorsSection from '../components/CreatorsSection';
import { BirdInfo, BoonInfo, NonInfo } from '../components/CreatorsSection/Data';
import { AuthenticateContext } from '../AuthenticateContext';

const Creators = () => {
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
                <CreatorsContainer>
                    <CreatorsSection lightTheme={lightTheme} {...BoonInfo}/>
                    <CreatorsSection lightTheme={!lightTheme} {...NonInfo}/>
                    <CreatorsSection lightTheme={lightTheme} {...BirdInfo}/>
                    <Footer/>
                </CreatorsContainer>
            </FlexDiv>
        </>
    );
}

export default Creators