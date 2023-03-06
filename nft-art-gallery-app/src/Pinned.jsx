import React, { useEffect, useState } from "react";
import { dataToDisplay } from "./Components/data";
import { useNavigate } from "react-router-dom";
import Footer from './Components/Footer';
import {
  AppHeader,
  AppSubHeader,
  AppMainContainer,
  PageToggle
} from './Components/AppComponents';
import {
  Card,
  ImageSpace,
  ImageTitle,
  FavoriteButton,
  GalleryContainer,
  GalleryCollection,
  GallerySubtitle
} from './Components/GalleryComponents'

const Pinned = () => {
  let navigate = useNavigate();
  const [myPins, SetMyPins] = useState([]);
  useEffect(() => {
    let b = localStorage.getItem("photos");
    let a = JSON.parse(b);
    let filtered = dataToDisplay.filter((e) => a.indexOf(e.id) > -1);
    SetMyPins(() => [...filtered]);
  }, []);
  return (
    <AppMainContainer>
      <AppHeader>NFT Art Gallery</AppHeader>
      <AppSubHeader>My Pins</AppSubHeader>
      <PageToggle onClick={() => navigate("/")}>Back To Home</PageToggle>

      <div className="content-wrapper">
        {myPins.map((e) => (
          <Card >
            <FavoriteButton></FavoriteButton>
            <ImageSpace src={e.image} alt="is" />
            <ImageTitle >{e.title}</ImageTitle>
          </Card>
        ))}
      </div>


      <Footer />
    </AppMainContainer>
  );
};

export default Pinned;




{/* <div className="content-wrapper">
        {myPins.map((e) => (
          <div className="imageWrapper">
            <img src={e.image} alt="is" className="nftimg" />
            <p className="imgT">{e.title}</p>
          </div>
        ))}
      </div> */}
