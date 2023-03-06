//File creates and styles components to be used in the Gallery component.
import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 80vw;
  display: block;
  margin: 0 auto;
  
   
`;

export const GallerySubtitle = styled.h2`
  color: #ed2b96;
  font-size: 24px;
  display: block;
  text-align: left;
  
`;

export const GalleryCollection = styled.div`
    
`;

export const Card = styled.div`
  width: 250px;
  height: 400px;
  background: #1e1e1e;
  margin: 20px;
  border: solid 1px #ed2b96;
  float: left;

`;

export const FavoriteButton = styled.button`
  display: block;
  float: right;
  margin: 10px;
  background: transparent;
  border-radius: 50%;
  border-style: none;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageSpace = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 300px;
  object-fit: contain;
  background: #cfcfcf;
  box-shadow:0 0 5px 5px  #949494;
  clear: both;
`;

export const ImageTitle = styled.p`
  display: block;
  margin-top: 10px;

`;
