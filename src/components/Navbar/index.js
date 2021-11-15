import React, {useState, useEffect} from 'react';
import {Nav, NavbarDetail, ThemeIcon, NavbarContainer, NavlogoContainer, NavIconWrapper, ImgIcon, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {Navbardata} from '../Navbardata'
import {FaBars, FaSun, FaMoon} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import ZubzibIcon from '../../images/bee.png';

const Navbar = ({toggle, lightTheme, togglelight}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 30){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = (e)=>{
        if (window.location.pathname === "/chatroom"){
            e.preventDefault();
        }
        scroll.scrollToTop();
    }

    const themeIconDisplay=()=>{
        if(lightTheme)
            return <ThemeIcon lightTheme={lightTheme} onClick={togglelight}><FaSun/></ThemeIcon>;
            
        else
            return <ThemeIcon lightTheme={lightTheme} onClick={togglelight}><FaMoon/></ThemeIcon>;
    }

    const navlinkitems = Navbardata.map((item, index)=>{
        return (
            <NavItem>
                <NavLinks lightTheme={lightTheme} key={index} to={item.to} spy={true} exact='true'>{item.data}</NavLinks>
            </NavItem>
        )
    })

    return (
        <>
            <Nav lightTheme={lightTheme} scrollNav={scrollNav}>
                <NavbarDetail>
                    <NavbarContainer>
                        <NavlogoContainer>
                            <NavIconWrapper>
                                <ImgIcon lightTheme={lightTheme} src={ZubzibIcon}/>
                            </NavIconWrapper>
                            <Navlogo to="/" onClick={toggleHome} lightTheme={lightTheme}>Zubzib</Navlogo>
                        </NavlogoContainer>
                        <MobileIcon onClick={toggle} lightTheme={lightTheme}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            {navlinkitems}
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink lightTheme={lightTheme} to="/signup">Sign Up</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                    {themeIconDisplay()}
                </NavbarDetail>
            </Nav>
        </>
    )
}

export default Navbar