import React, {useRef} from 'react'
import {SignupContainer, SignupBg, ImageBg, SignupDetail, Row1, TitleH1, Row2, SignupPaper, SignupH1, SignupContent, LabelWrapper, Label, Input, Error, SubmitButton, Button, Div, Span, Image} from "./SignupElements"
import {useForm} from 'react-hook-form'
import axios from 'axios';
import signupbackground from '../../images/signup-background1.png'
import signup from '../../images/signup1.svg'
import Typewriter from 'typewriter-effect'

const SignupSection=({lightTheme})=>{
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit =(data)=>{
        
        fetch("https://a9b9-2001-fb1-4e-97f4-25-8bd2-87ca-1651.ngrok.io/user/add",{
            method: "POST",
            headers:{"Content-Type":"application/json",'Accept': 'application/json'},
            body:JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            if(result==-1){
                alert("Username is already taken")
            }
            else if (result == 0){
                alert("Email is already taken")
            }
            else{
                alert("New user added")
                let username = JSON.stringify(data,["username"]).slice(13,-2)
                let secret = JSON.stringify(data,["password"]).slice(13,-2)
                let email = JSON.stringify(data,["email"]).slice(10,-2)
                axios.post(
                    "https://api.chatengine.io/users/",
                    {'username':username,'secret':secret,'email':email},
                    {headers:{"Private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}},
                )
            }
            return result;
          })
        
    }

    return(
        <SignupContainer lightTheme={lightTheme} id="/">
            <SignupBg>
                <ImageBg src={signupbackground}/>
            </SignupBg>
            <SignupDetail>
                <Row2>
                    <SignupPaper>
                        <SignupH1>
                            <span style={{color:"#ebbf5d"}}>Signup</span> a new account
                        </SignupH1>
                        <SignupContent onSubmit={handleSubmit(onSubmit)}>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="username">Username</Label>
                                <Input {...register("username", {required:"username is required", maxLength:{value:25,message:"username must be less than 30 letters"}})} lightTheme={lightTheme} type="text" class="form-control" id="username" placeholder="Username" name="username"/>
                                {errors.username && <Error>{errors.username?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="email">Email</Label>
                                <Input {...register("email", {required:"email is required"})} lightTheme={lightTheme} type="email" class="form-control" id="email" placeholder="Email" name="email"/>
                                {errors.email && <Error>{errors.email?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="password">Password</Label>
                                <Input {...register("password", {required:"password is required", minLength:{value:8, message:"password must contains atleast 8 letters"},maxLength:{value:25, message:"password must be less than 25 letters"}})} lightTheme={lightTheme} type="password" class="form-control" id="password" placeholder="Password" name="password"/>
                                {errors.password && <Error>{errors.password?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="password2">Reconfirm Password</Label>
                                <Input {...register("password2", {validate: value=>value===password.current || "passwords do not match"})} lightTheme={lightTheme} type="password" class="form-control" id="password2" placeholder="Reconfirm Password" name="password2"/>
                                {errors.password2 && <Error>{errors.password2?.message}</Error>}
                            </LabelWrapper>
                            <LabelWrapper className="col-8 pt-3 mx-auto">
                                    <SubmitButton lightTheme={lightTheme} type="submit" value="Sign up"/>
                            </LabelWrapper>
                            <LabelWrapper className="col-8 pt-3 mx-auto">
                                <Button to="/">
                                    Already have an Account?
                                </Button>
                            </LabelWrapper>
                        </SignupContent>
                    </SignupPaper>
                </Row2>
                <Row1>
                    <Div>
                        <div><TitleH1>Join Our</TitleH1></div>
                        <div><TitleH1>
                        <Span style={{color:"#ffcd01"}}><Typewriter onInit={(typewriter)=>{
                                    typewriter.typeString("Community!")
                                    .pauseFor(7000)
                                    .deleteAll()
                                    .typeString("Family!")
                                    .pauseFor(7000)
                                    .deleteAll()
                                    .typeString("Bee Hive!")
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .start();
                                }}
                                options={{
                                    loop: true,
                                }}/> </Span>
                        </TitleH1></div>
                    </Div>
                    <Image src={signup}/>
                </Row1>
            </SignupDetail>
        </SignupContainer>
    )
}

export default SignupSection