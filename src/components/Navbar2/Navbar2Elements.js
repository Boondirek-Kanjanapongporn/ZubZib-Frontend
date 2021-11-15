import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"

export const Nav = styled.nav`
    background: ${({lightTheme, scrollNav})=>(lightTheme? (scrollNav? "#f6f6f6" : "#f0f0f0"): (scrollNav? "#121212" : "#282b3080"))};
    height: 8vh;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:999;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarDetail = styled.div`
    //background-color:green;
    margin:auto;
    height: 100%;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;
    display:flex;
    align-items:center;
    flex-wrap:nowrap;
`

export const ThemeIcon = styled.div`
    margin-top: ${({setting})=>(setting? '7px': '5px')};
    padding:0;
    margin-left: ${({lightTheme, setting})=>(setting? (lightTheme? '30px': '29.3px') : (lightTheme? '30px': '35px'))};
    font-size: ${({lightTheme, setting})=>(setting? '1.8rem' : (lightTheme? '1.8rem': '1.5rem'))};
    cursor: pointer;
    color: #ebbf5d;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    }

    @media screen and (max-width: 768px){
        margin-right: 65px;
    }
`
export const SettingPaper = styled.div`
    width: 250px;
    height: 190px;
    z-index: 1;
    right: 5.5%;
    transition: 0.3s ease-in-out;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: absolute;
    display: flex;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px 10px;
    top: ${({settingOpen})=>(settingOpen? '0':'-400px')};
    margin-top: ${({settingOpen})=>(settingOpen? '8vh':'0')};
    background:${({lightTheme})=>(lightTheme? '#f0f0f0':'#121212')};
    height: max-content; 
`
export const SettingH1 = styled.h1`
    font-size: 1.5rem;
    color: #36393e;
    font-weight: 550;
    margin-bottom: 15px;
`

export const SettingH2 = styled.h2`
    font-size: 1.3rem;
    color: #36393e;
    font-weight: 550;
`

export const SettingButton1 = styled.button`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#36393e')};
    color: ${({lightTheme})=>(lightTheme?'#36393e':'#ebbf5d')};
    white-space: nowrap;
    padding: 10px 28px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: ${({passwordOpen})=>(passwordOpen?'8px':'0')};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#36393e':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#36393e')};
    }
`

export const SettingButton2 = styled.button`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#d6453d':'#36393e')};
    color: ${({lightTheme})=>(lightTheme?'#f6f6f6':'#ebbf5d')};
    white-space: nowrap;
    padding: 10px 36px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 8px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#36393e':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#f6f6f6':'#36393e')};
    }
`
export const PasswordForm = styled.form`
    border-radius: 20px;
    border: ${({isChange})=>(isChange? '2px solid #f9bc50':'2px solid #d6453d')};
    margin: auto;
    padding: 10px 10px;
    display: ${({passwordOpen})=>(passwordOpen? 'flex':'none')};
    flex-direction: column;
`
export const PasswordLabel = styled.label`
    font-size: 1rem;
    color: #36393e;
    font-weight: 550;
    margin-bottom: 3px;
`
export const PasswordInput = styled.input`
    background: ${({lightTheme})=>(lightTheme? "#f0f0f0":"#a8a8a8")};
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    border-color: ${({lightTheme})=>(lightTheme? '#36393e':'#ffffffd9')};
    border: none;
    border-bottom:2px solid;
    width: 100%;
    margin-bottom: 0.1em;
    height: 2.5em;
    padding-left: 0.5em;
    font-size: 16px;
    &:focus{
        outline: none;
    }
`

export const PasswordError = styled.span`
    color: #cc0000;
    font-size: 12px;
    font-weight:600;
    letter-spacing: 1.2px;
    &::before {
        display: inline;
        content: "⚠ ";
    }
`

export const PasswordButton = styled.input`
    margin-top: 10px;
    border-radius: 50px;
    background: ${({isChange, lightTheme})=>(isChange? (lightTheme? '#ebbf5d':'#36393e') : (lightTheme? '#d6453d':'#36393e'))};
    color: ${({isChange, lightTheme})=>(isChange? (lightTheme?'#36393e':'#ebbf5d') : (lightTheme?'#f6f6f6':'#ebbf5d'))};
    white-space: nowrap;
    padding: 10px 36px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({isChange, lightTheme})=>(isChange? (lightTheme? '#36393e':'#f1d28e') : (lightTheme? '#36393e':'#f1d28e'))};
        color: ${({isChange, lightTheme})=>(isChange? (lightTheme? '#ebbf5d':'#36393e') : (lightTheme? '#f6f6f6':'#36393e'))};
    }
`

export const NavbarContainer = styled.div`
    //background-color:orange;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-left: ${(lightTheme)=>(lightTheme? '':'-100px')};
    //padding: 0 24px;
    //max-width: 1100px;
`;

export const NavlogoContainer = styled.div`
    margin: auto;
    display:flex;
    flex-direction: row;
    align-items:flex-end;
    justify-content:center;
    margin-left: 30px;
`

export const NavIconWrapper = styled.div`
    width:32px;
    height:32px;
    margin-bottom: 3px;
`

export const ImgIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: ${({lightTheme})=>(lightTheme? '':'50%')};
    background-color: ${({lightTheme})=>(lightTheme? '':'#f6f6f6')}; */
`

export const Navlogo = styled(LinkR)`
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #ebbf5d;
    }

    @media screen and (max-width: 780px){
        font-size:1.5rem
    }

    @media screen and (max-width: 768px){
        font-size:1.5rem
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        margin-top:-1.5vh;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};

        &:hover{
            transition: all 0.2s ease-in-out;
            color: #ebbf5d;
        }
    }
`;

export const NavMenu = styled.ul`
    //background-color:orange;
    display: flex;
    width: 600px;
    justify-content: space-evenly;
    align-items: flex;
    list-style: none;
    text-align: center;
    margin-right: 30px;
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height: 100%;
`

export const NavLinks = styled(LinkR)`
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;

    &:hover{
        transition: all 0.2 ease-in-out;
        color: #ebbf5d;
        border-bottom: ${({lightTheme})=>(lightTheme? '3px solid #36393e': '3px solid #ebbf5d')};
    };
    &.active{
        border-bottom: 3px solid #ebbf5d;
    };
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.button`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#36393e':'#ebbf5d')};
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#36393e')};
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#36393e':'#36393e')};
    }
`