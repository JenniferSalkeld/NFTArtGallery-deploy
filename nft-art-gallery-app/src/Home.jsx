import {
  AppMainContainer,
  AppHeader,
  AppSubHeader,
  PageToggle
} from "./Components/AppComponents";
import Gallery from "./Components/Gallery";
import Footer from './Components/Footer';
//this to navigate to other pages
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <AppMainContainer className="App">
      <AppHeader>NFT Art Gallery</AppHeader>
      <AppSubHeader>Click on the Heart to pin your Images</AppSubHeader>
      <Gallery />
      <PageToggle onClick={() => navigate("/pins")}>See Pinned Items</PageToggle>
      <Footer />
    </AppMainContainer>
  );
}

export default Home;
