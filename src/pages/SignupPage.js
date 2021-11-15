import React, {useState, useContext} from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import SignupSection from '../components/SignupSection';
import ScrollToTop from '../components/ScrollToTop';

const Signup=()=>{
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
    const togglelight = ()=>{
        return setLightTheme(!lightTheme);
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
                <SignupSection lightTheme={lightTheme}/>
                <Footer/>
            </FlexDiv>
        </>
    )
}

export default Signup