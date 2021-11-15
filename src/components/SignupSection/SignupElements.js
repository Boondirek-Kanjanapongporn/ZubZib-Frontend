import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"

export const SignupContainer = styled.div`
    background-color: ${({lightTheme})=>(lightTheme? '#f6f6f6': '#1e2124')};
    margin-top:-8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`
export const SignupBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    display: ${({lightTheme})=>(lightTheme? 'none': '')};
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    object-position: 0% 0%;
    transform: scaleX(-1);
`

export const SignupDetail = styled.div`
    //background-color:green;
    width: 100%;
    height:100%;
    display: flex;
    align-items: flex-start;
    justify-content:flex-start;
    flex-direction: row;
    z-index: 10;
`
export const Row1 = styled.div`
    width: 65%;
    height:100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 10px;
`

export const TitleH1 = styled.h1`
    margin-right: 30px;
    margin-top: 5rem;
    font-size: 4.8rem;
    color: #36393e;
    font-weight: 550;
    padding-bottom: 10px;
    //-webkit-text-stroke: 3px #fad59e;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const Row2 = styled.div`
    //background-color:#f0f0f0;
    //width: 35%;
    width: 50%;
    height:100%;
    display:flex;
    padding: 15px 15px;
`

export const SignupPaper = styled.div`
    background-color: #f0f0f0;
    margin: 6em auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem 1rem;
    justify-content: flex-start;
    max-height: 80%;
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const SignupH1 = styled.h1`
    font-size: 1.8rem;
    color: #36393e;
    font-weight: 550;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const SignupContent = styled.form`
    min-height: 300px;
    display:flex;
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    width: 350px;
    margin-top:-15px;

    @media screen and (max-width:530px){
        width: 200px;
    }

    @media screen and (max-width:430px){
        width: 150px;
    }
`

export const LabelWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items:flex-start;
    justify-content:center;
    padding: 0 0;
    //margin-bottom:15px;
`

export const Label = styled.label`
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#36393e')};
    padding-top: 0.1em;
    font-size: 18px;
    font-weight:600;
    letter-spacing: 1.2px;
`

export const Input = styled.input`
    background: ${({lightTheme})=>(lightTheme? "#f0f0f0":"#a8a8a8")};
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    border-color: ${({lightTheme})=>(lightTheme? '#36393e':'#ffffffd9')};
    border: none;
    border-bottom:2px solid;
    width: 100%;
    height: 2.5em;
    padding-left: 0.5em;
    font-size: 16px;
    margin-bottom: 2px;
    &:focus{
        outline: none;
    }
`

export const Error = styled.span`
    color: #cc0000;
    font-size: 15px;
    font-weight:600;
    letter-spacing: 1.2px;
    &::before {
        display: inline;
        content: "⚠ ";
    }
`

export const SubmitButton = styled.input`
    background: ${({lightTheme})=>(lightTheme? '#36393e':'#ebbf5d')};
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#36393e')};
    padding:12px 30px;
    font-size:16px;
    margin: 0 auto;
    margin-top: 2em;
    border-radius: 10px;
    min-width: 150px;
    white-space: nowrap;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#36393e':'#36393e')};
        transition: all 0.2s ease-in-out;
    }
`

export const Button = styled(LinkR)`
    margin:auto;
    cursor: pointer;
    border: none;
    text-decoration: none;
    color:#ebbf5d;
    margin-top: 0.9em;
`

export const Div =  styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction:row;
    width: 100%;
`

export const Span = styled.span`
    color:#ffcd01;
    -webkit-text-stroke: 3px #36393e;
`

export const Image = styled.img`
    width: 80%;
    height:auto;
`