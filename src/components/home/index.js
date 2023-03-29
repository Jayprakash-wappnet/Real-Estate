import Banner from "./Banner";
import Header from "./Header";
import "./style.css"
const index = () => {
  
  return (
    <div>
      <Header />
      <div className="banner-color">

      <Banner/>
      </div>
    </div>
  );
};

export default index;
