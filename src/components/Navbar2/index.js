import React, {useState, useEffect, useContext, useRef} from 'react';
import {useForm} from 'react-hook-form'
import {Nav, NavbarDetail, ThemeIcon, SettingPaper, SettingH1, SettingH2, SettingButton1, SettingButton2, PasswordForm, PasswordLabel, PasswordInput, PasswordError, PasswordButton, NavbarContainer, NavlogoContainer, NavIconWrapper, ImgIcon, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbar2Elements'
import {Navbar2data} from '../Navbar2data'
import {FaBars, FaSun, FaMoon} from 'react-icons/fa';
import {RiUserSettingsFill} from 'react-icons/ri';
import {animateScroll as scroll} from 'react-scroll';
import ZubzibIcon from '../../images/bee.png';
import { UsernameContext } from '../../UsernameContext';
import { PasswordContext } from '../../PasswordContext';
// import {onSubmitDelete} from '../../pages/ChatroomPage';

const Navbar2 = ({toggle, lightTheme, togglelight, toggleauthenticate}) => {
    const {username, setUsername} = useContext(UsernameContext);
    const {setPassword} = useContext(PasswordContext);
    const [scrollNav, setScrollNav] = useState(false);
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const {register: register2, handleSubmit: handleSubmit2, formState: { errors:errors2 }} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const [settingOpen, setSettingOpen] = useState(false);
    const toggleSetting = () => {
        setSettingOpen(!settingOpen)
    };

    const [changeOpen, setChangeOpen] = useState(false);
    const toggleChange = () => {
        setChangeOpen(!changeOpen)
        setDeleteOpen(false)
    };

    const [deleteOpen, setDeleteOpen] = useState(false);
    const toggleDelete = () => {
        setDeleteOpen(!deleteOpen)
        setChangeOpen(false)
    };

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

    const navlinkitems = Navbar2data.map((item, index)=>{
        return (
            <NavItem>
                <NavLinks lightTheme={lightTheme} key={index} to={item.to} spy={true} exact='true' target={item.target}>{item.data}</NavLinks>
            </NavItem>
        )
    })

    function logOut(){
        var result = window.confirm("Confirm log out from " + username + "?");
        if (result == true){
            setUsername("");
            setPassword("");
            toggleauthenticate();
        }
    }

    const onSubmitChange =(ChangeData)=>{
        var result = window.confirm("Are you sure you want to change password?");
        if(result==true){
            let temp = {"username":username}
            let Obj = {...temp, ...ChangeData}
            alert(JSON.stringify(Obj))
        }
    }

    const onSubmitDelete =(DeleteData)=>{
        var result = window.confirm("Are you sure you want to delete account?");
        if (result == true){
            alert("Deleted User")
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
            //             {headers:{"Private-key":""}}
            //         )
            //     }
            //     else{
            //         alert("Incorrect password")
            //     }
            // })
        }
    }

    function deleteNotify(){
        var result = window.confirm("Are you sure you want to delete your Account?");
        if (result == true){
            alert("Deleted")
        }
    }

    return (
        <>
            <SettingPaper lightTheme={lightTheme} settingOpen={settingOpen}>
                <SettingH2>Hi, {username}!</SettingH2>
                <SettingH1>Account Setting</SettingH1>

                <SettingButton1 passwordOpen={changeOpen} lightTheme={lightTheme} onClick={toggleChange}>Change Password</SettingButton1>
                <PasswordForm isChange={true} lightTheme={lightTheme} passwordOpen={changeOpen} onSubmit={handleSubmit(onSubmitChange)}>
                    
                    <PasswordLabel>Password:</PasswordLabel>
                    <PasswordInput {...register("password", {required:"password is required", minLength:{value:8, message:"password atleast 8"},maxLength:{value:25, message:"password atmost 25"}})} lightTheme={lightTheme} type="password" className="form-control" id="password" placeholder="Password" name="password"/>
                    {errors.password && <PasswordError>{errors.password?.message}</PasswordError>}
                    
                    <PasswordLabel lightTheme={lightTheme} for="password2">Reconfirm Password</PasswordLabel>
                    <PasswordInput {...register("password2", {validate: value=>value===password.current || "passwords do not match"})} lightTheme={lightTheme} type="password" class="form-control" id="password2" placeholder="Reconfirm Password" name="password2"/>
                    {errors.password2 && <PasswordError>{errors.password2?.message}</PasswordError>}
                    
                    <PasswordButton isChange={true} lightTheme={lightTheme} type="submit" value="Confirm"/>
                </PasswordForm>

                <SettingButton2 lightTheme={lightTheme} onClick={toggleDelete}>Delete Account</SettingButton2>
                <PasswordForm isChange={false} lightTheme={lightTheme} passwordOpen={deleteOpen} onSubmit={handleSubmit2(onSubmitDelete)}>
                    
                    <PasswordLabel>Password:</PasswordLabel>
                    <PasswordInput {...register2("password", {required:"password is required"})} lightTheme={lightTheme} type="password" className="form-control" id="password" placeholder="Password" name="password"/>
                    {errors2.password && <PasswordError>{errors2.password?.message}</PasswordError>}
                    
                    <PasswordButton isChange={false} lightTheme={lightTheme} type="submit" value="Confirm"/>
                </PasswordForm>
            </SettingPaper>
            <Nav lightTheme={lightTheme} scrollNav={scrollNav}>
                <NavbarDetail>
                    <NavbarContainer lightTheme={lightTheme}>
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
                            <NavBtnLink lightTheme={lightTheme} onClick={logOut}>Log out</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                    <ThemeIcon lightTheme={lightTheme} setting={true} onClick={toggleSetting}><RiUserSettingsFill/></ThemeIcon>
                    {themeIconDisplay()}
                </NavbarDetail>
            </Nav>
        </>
    )
}

export default Navbar2