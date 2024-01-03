import Navbar from "../Navbar";
import "./index.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="title">
        <div>SALVIA</div>
        <div>-</div>
        <div>AREA</div>
        <div>FOR</div>
        <div>EVER</div>
      </div>
      <div className="right-area">
        <div className="desc">
          SALVIA WU' s project presents a new perspective and a fresh
          interpretation of visitors through a variety of experimental
          expressions beyond convention.
        </div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};
export default Header;
