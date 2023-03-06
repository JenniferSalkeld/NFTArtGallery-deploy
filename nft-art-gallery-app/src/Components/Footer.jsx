//Contains Footer components
import React from 'react'
import {
    FooterContainer,
    SocialLink,
    ContibutorWrapper,
    Contributors
} from './FooterElements';
import {
    AiOutlineCodepen,
    AiOutlineGithub
} from 'react-icons/ai';

const Footer = () => {
    //Styled for the socials icons
    let socialButtonStyle = { color: "#ed2b96", width: "100%", height: "100%" };


  return (
    <FooterContainer>
        {/* Github Link */}
        <SocialLink href="https://github.com/MaudHutch86/NFT-Art-gallery-Hackaton"><AiOutlineGithub style={socialButtonStyle}/></SocialLink>
        
        {/* CodePen.io Link */}
        <SocialLink href="#"><AiOutlineCodepen style={socialButtonStyle}/></SocialLink>
        <ContibutorWrapper>
            <Contributors>Created by Dzovi#2025, CryptoJoggler ✨#0926, and Mortema#0668</Contributors>
        </ContibutorWrapper>
    </FooterContainer>
  )
}

export default Footer