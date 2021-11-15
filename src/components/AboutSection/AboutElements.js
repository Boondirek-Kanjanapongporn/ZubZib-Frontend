import styled from 'styled-components';

export const AboutContainer= styled.div`
    height: 100vh;
    width:100%;
    display:flex;
    margin-top:-8vh;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#1e2124')};
    justify-content:center;
    align-items:center;
    padding: 0px 15px;

    @media screen and (max-width: 768px){
        height:max-content;
        padding-top: 75px;
    }
`

export const AboutWrapper = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    flex-direction: column;
    padding: 3rem 3rem;
    align-items:center;
    justify-content:center;
`

export const AboutTitleContainer = styled.div`
    /* background-color:green; */
    padding-top:2rem;
    margin: auto;
    padding-right:64px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

export const AboutHeaderWrapper = styled.div`
    //background-color:orange;
    margin: auto;
    display:flex;
    flex-direction: row;
    align-items:flex-end;
    justify-content:center;
`

export const AboutIconWrapper = styled.div`
    width:64px;
    height:64px;
    margin-bottom: 3px;
    margin-right: 10px;
`

export const ImgIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #ebbf5d;
    font-weight: 550;
    padding-bottom: 3px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const AboutDetail = styled.div`
    background-color: #f0f0f0;
    margin: auto;
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-items:flex-start;
    padding: 1.5rem 1.5rem;
    justify-content: flex-start;
    min-height: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 1000px;
`

export const AboutP = styled.p`
    font-size: 1.2em;
    color: #36393e;
    margin-bottom: ${({space})=>(space? '2rem':'0.5rem')};
`