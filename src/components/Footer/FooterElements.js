import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #282b30;
`

export const FooterWrap = styled.div`
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    max-width: 1100px;
`

export const SocialLogo = styled(LinkR)`
    color: #ffffffd9;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #ffffffd9;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color:#ffffffd9;
    font-size: 30px;
`