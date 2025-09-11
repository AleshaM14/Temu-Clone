import React from "react";
// import Section1 from "../templates/Section1";
import Archive from "../templates/Archive";
import LightningDeals from "../templates/LightningDeals.jsx";
import BlackBar from "../atoms/BlackBar.jsx";
import PromoBanner from "../organisms/PromoBanner.jsx";
import WhyChooseTemu from "../molecules/WhyChooseTemu.jsx";
import NavbarSection from "../templates/NavbarSection.jsx";
import TopBar from "../atoms/TopBar.jsx";
import Footer from "../organisms/Footer.jsx";
import HeaderBtn from "../atoms/HeaderBtn.jsx";



const HomePage = ({ cartItems, setCartItems }) => {
  return (
    <div className="Homepage">
      <TopBar/>
      <NavbarSection/>
      <PromoBanner/>
      <WhyChooseTemu/>
      <LightningDeals cartItems={cartItems} setCartItems={setCartItems} />

      <BlackBar />
      {/* <Section1 cartItems={cartItems} setCartItems={setCartItems}/> */}
      <Archive cartItems={cartItems} setCartItems={setCartItems} />
      <Footer/>
    </div>
  );
};

export default HomePage;
