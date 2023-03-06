//This File hold the styled components to be used in the App.jsx file.

import styled from "styled-components";

export const AppMainContainer = styled.div`
  width: 100vw;
  background-color: #000;
  color: white;
  text-align: center;
  font-family: Poppins, sans-serif;
`;

export const AppHeader = styled.h1`
  margin: 30px auto;
  font-size: 48px;
`;

export const AppSubHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  color: white;
  font-family: Poppins, sans-serif;
`;

export const PageToggle = styled.button`
    position: absolute;
    top: 50px;
    right: 12%;
    border: 1px solid #ed2b96;
    padding:8px 16px;
    border-radius: 8px;
    cursor: pointer;
    color: black;
    background-color: #ed2b96;

    &:hover{
        color: #ed2b96;
        background-color: transparent;
    }
`;
