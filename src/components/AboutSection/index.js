import React from 'react';
import {AboutContainer, AboutWrapper, AboutTitleContainer, AboutHeaderWrapper, AboutIconWrapper, ImgIcon, AboutH1, AboutDetail, AboutP} from './AboutElements';
import ZubzibIcon from '../../images/bee.png';
import { AboutData } from './Data';

const AboutSection = ({lightTheme}) =>{

    return (
        <AboutContainer lightTheme={lightTheme}>
            <AboutWrapper>
                <AboutTitleContainer>
                    <AboutHeaderWrapper>
                        <AboutIconWrapper>
                            <ImgIcon lightTheme={lightTheme} src={ZubzibIcon}/>
                        </AboutIconWrapper>
                        <AboutH1 lightTheme={lightTheme}>About Zubzib</AboutH1>
                    </AboutHeaderWrapper>
                    {/* <AboutH2>We are </AboutH2>
                    <AboutH2>We are </AboutH2> */}
                </AboutTitleContainer>
                <AboutDetail>
                    <AboutP>
                        {AboutData.frontend}
                    </AboutP>
                    <AboutP>
                        {AboutData.backend}
                    </AboutP>
                    <AboutP space={true}>
                        {AboutData.language}
                    </AboutP>
                    <AboutP>
                        {/* {AboutData.detail} */}
                        Zubzib is a social network website created for our final Java project at King Mongkut's Institute of Technology Ladkrabang.
                        Zubzib's objective is to connect everyone through the power of the online world. With Zubzib, we want to create a <b>Community</b>, <b>Society</b>,
                        and <b>Family</b> for everyone. In this project, we divide Zubzib into 2 sections— Frontend and Backend Development. For Frontend, we used React.js Framework to build
                        our website. The languages include <b>Javascript</b>, <b>HTML5</b>, and <b>CSS</b>. For Backend, on the other hand, we used Spring Framework— which is
                        built by <b>Java</b> language. The Spring Boot Framework is responsible for connecting Zubzib to a database, Login/Signup Accessibility,
                        Password Encryption, Web security, Delete and Update user, Sending Emails, and Incognito Websocket. One day, we hope that Zubzib can contribute to real-based implementation for everyone to enjoy.
                    </AboutP>
                    <AboutP>
                        {AboutData.ending}
                    </AboutP>
                </AboutDetail>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection;