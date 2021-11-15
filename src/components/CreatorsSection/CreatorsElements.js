import styled from 'styled-components'

export const CreatorsContainer = styled.div`
    overflow: hidden;
    height: 100vh;
    width:100%;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#121212')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const CreatorsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%auto;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: max-content;
    }
`

export const CreatorsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=>(imgStart? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #ebbf5d;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    
    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`

export const Subtitle= styled.p`
    max-width: 520px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    line-height: 24px;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
`

export const Subtitle1= styled.p`
    max-width: 520px;
    margin-bottom: 35px;
    font-size: 1.5rem;
    line-height: 24px;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    //background-color:green;
    overflow: hidden;
    max-width:555px;
    height: 100%auto;
    display: inline-block;
`

export const Img = styled.img`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width:auto;
    display: block;
    /* width: 100%auto;
    display:block;
    margin: 0 0 10px 0;
    padding-right: 0; */
`