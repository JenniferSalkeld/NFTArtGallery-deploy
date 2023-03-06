//Describes Footer components. 
import styled from 'styled-components';


export const FooterContainer = styled.div`
    width: 100%;
    display: block;
    clear: both;
    position: absolute;
    bottom: 0;
    padding: 10px;
    text-align: center;
`;

export const SocialLink = styled.a`
    display: block;
    width: 50px;
    height: 50px;
    background: #1e1e1e;
    border-radius: 50%;
    float: left;
    margin-left: 20px;
    transition: all .3s ease-in-out;

    &:hover{
        cursor: pointer;
        background: white;
        transition: all .3s ease-in-out;
    }
`;

export const ContibutorWrapper = styled.div`

`;

export const Contributors = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 16px;
    color: #ddd;
`;