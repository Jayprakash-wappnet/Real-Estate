import Banner from "./Banner";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./style.css"
const index = () => {
  
  return (
    <div>
      <Header />
      <div className="banner-color">

      <Banner/>
      </div>
      <SearchBar/>
    </div>
  );
};

export default index;
