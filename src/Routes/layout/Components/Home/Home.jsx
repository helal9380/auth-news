/** @format */

import Header from "../../../../Header/Header";
import LeftSide from "../LeftSide/LeftSide";
import Navber from "../Navbar/Navber";
import RigthSide from "../RightSide/RigthSide";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navber></Navber>
      <div className="grid grid-cols-4 gap-4">
        <LeftSide></LeftSide>
        <div className="col-span-2 border-2">Dragon News Home</div>
        <RigthSide></RigthSide>
      </div>
    </div>
  );
};

export default Home;
