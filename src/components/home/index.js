import Banner from "./Banner";
import Header from "./Header";
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
      <WhatWeDo/>
    </div>
  );
};

export default index;
