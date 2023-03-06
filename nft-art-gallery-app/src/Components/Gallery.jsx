//This file renders the Gallery component along with the chil components
import { dataToDisplay } from "./data";
import React, { useState, useEffect } from "react";
import {
  GalleryCollection,
  GallerySubtitle,
  GalleryContainer,
  Card,
  FavoriteButton,
  ImageSpace,
  ImageTitle,
} from "./GalleryComponents";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

//style of the heart icon
let favButtonStyle = { color: "#ed2b96", width: "100%", height: "100%" };

const DisplayCard = ({ image, title, id, pins }) => {
  //the state here is to check which is pined or not and display them
  const [pined, setPined] = useState(false);

  //useEffect to change the state of the pinned ones from local storage
  useEffect(() => {
    setPined(() => pins);
  }, [pins]);

  //function to add an item to local storage.
  const putItemToLocalStorage = (index) => {
    const b = localStorage.getItem("photos");
    //check if the local storage is empty or not
    if (!b) {
      const arr = [];
      arr.push(index);
      let a = JSON.stringify(arr);
      localStorage.setItem("photos", a);
      setPined(true);
    } else {
      const arr = JSON.parse(b);
      console.log(arr);
      arr.push(index);
      let a = JSON.stringify(arr);
      localStorage.setItem("photos", a);
      setPined(true);
    }
  };

  //function to delete an item from local storage.
  const deleteItemFromLocalStorage = (index) => {
    const b = localStorage.getItem("photos");
    const arr = JSON.parse(b);
    const indexToDelete = arr.indexOf(index);
    console.log(indexToDelete);
    arr.splice(indexToDelete, 1);
    console.log(arr);
    let a = JSON.stringify(arr);
    localStorage.setItem("photos", a);
    setPined(false);
  };

  return (
    <Card>
      <FavoriteButton>
        {pined ? (
          <AiFillHeart
            style={favButtonStyle}
            onClick={() => deleteItemFromLocalStorage(id)}
          />
        ) : (
          <AiOutlineHeart
            style={favButtonStyle}
            onClick={() => putItemToLocalStorage(id)}
          />
        )}
      </FavoriteButton>
      <ImageSpace src={image}></ImageSpace>
      <ImageTitle>{title}</ImageTitle>
    </Card>
  );
};

const Gallery = () => {
  //getting all pinned pics
  const [pinedItems, setPinedItems] = useState([]);

  //initialize the state of the whole gallery
  useEffect(() => {
    const b = localStorage.getItem("photos");
    if (!b) {
      console.log("empty");
    } else {
      const arr = JSON.parse(b);
      console.log(arr);
      setPinedItems([...arr]);
    }
  }, []);

  return (
    <GalleryContainer>
      <GallerySubtitle>Collections</GallerySubtitle>
      <GalleryCollection>
        {dataToDisplay.map((element) => (
          <DisplayCard
            image={element.image}
            key={element.id}
            title={element.title}
            id={element.id}
            pins={pinedItems.indexOf(element.id) !== -1 ? true : false}
          />
        ))}
      </GalleryCollection>
    </GalleryContainer>
  );
};

export default Gallery;
