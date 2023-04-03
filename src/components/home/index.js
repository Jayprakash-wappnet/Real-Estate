import Banner from "./Banner";
import FeaturedProperties from "./FeaturedProperties";
import Footer from "./Footer";
import Header from "./Header";
import Property from "./Property";
import SearchBar from "./SearchBar";
import WhatWeDo from "./WhatWeDo";
import "./style.css";
const index = () => {
  return (
    <div>
      <Header />
      <div className="banner-color">
        <Banner />
      </div>
      <SearchBar />
      <WhatWeDo />
      <Property />
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default index;
