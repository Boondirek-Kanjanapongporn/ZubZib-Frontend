import React, {useContext} from 'react';
import {LoginContainer, LoginBg, ImageBg, LoginDetail, Image, Row1, Row2, LoginPaper, LoginH1, LoginContent, LabelWrapper, Label, Input, Error, SubmitButton, Button, ClickText} from "./LoginElements"
import {useForm} from 'react-hook-form'
import { UsernameContext } from '../../UsernameContext';
import { PasswordContext } from '../../PasswordContext';
import loginbackground from '../../images/login-background.png'
import bees from '../../images/bees.png'

const LoginSection = ({lightTheme, toggleauthenticate}) => {
    const {setUsername} = useContext(UsernameContext);
    const {setPassword} = useContext(PasswordContext);
    // const [users, setUsers] = useState([]);
    const {register, handleSubmit, formState: { errors }} = useForm();

    // const handleClick=()=>{
    //     alert(JSON.stringify(users));
    // }

    // useEffect(() => {
    //     fetch("https://9e84-2001-fb1-4e-97f4-25-8bd2-87ca-1651.ngrok.io/user/getAll")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setUsers(result);
    //     })
    // }, [])

    const onSubmit =(loginData)=>{
        fetch("https://9e84-2001-fb1-4e-97f4-25-8bd2-87ca-1651.ngrok.io/user/match",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loginData)
        }).then((res) => res.json()).then((result) => {
            if(JSON.stringify(result,["username"]).slice(13,-2)!=="null"){
                let usernameValue = JSON.stringify(result,["username"]).slice(13,-2)
                let passwordValue = JSON.stringify(loginData,["password"]).slice(13,-2)
                setUsername(usernameValue);
                setPassword(passwordValue);
                toggleauthenticate();
            }
            else
                alert("Username or Password is incorrect")
            return result;
          })
    }

    return (
        <LoginContainer lightTheme={lightTheme} id="/">
            <LoginBg>
                <ImageBg src={loginbackground}/>
            </LoginBg>
            <LoginDetail>
                <Row1>
                    <Image src={bees}/>
                </Row1>
                <Row2>
                    <LoginPaper>
                        <LoginH1>
                            <span style={{color:"#ebbf5d"}}>Login</span> your account
                        </LoginH1>
                        <LoginContent onSubmit={handleSubmit(onSubmit)}>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="username">Username or Email</Label>
                                <Input {...register("username", {required:"username is required"})} lightTheme={lightTheme} type="text" className="form-control" id="username" placeholder="Name or Email" name="username"/>
                                {errors.username && <Error>{errors.username?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="password">Password</Label>
                                <Input {...register("password", {required:"password is required"})} lightTheme={lightTheme} type="password" className="form-control" id="password" placeholder="Password" name="password"/>
                                {errors.password && <Error>{errors.password?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper className="col-8 pt-3 mx-auto">
                                    <SubmitButton lightTheme={lightTheme} type="submit" value="Log In"/>
                            </LabelWrapper>
                            <LabelWrapper className="col-8 pt-3 mx-auto">
                                <Button to="/signup">
                                    Create Account
                                </Button>
                            </LabelWrapper>
                        </LoginContent>
                    </LoginPaper>
                    {/* <button onClick={handleClick}>Test</button> */}
                </Row2>
            </LoginDetail>
        </LoginContainer>
    )
}

export default LoginSection