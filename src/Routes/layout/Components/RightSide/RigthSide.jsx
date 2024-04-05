/** @format */
import qZone1 from '../../../../assets/qZone1.png';
import qZone2 from '../../../../assets/qZone2.png';
import qZone3 from '../../../../assets/qZone3.png';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RigthSide = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Login With</h3>
      <div className="flex text-cyan-500 mb-2 items-center gap-2 border border-gray-800 py-2 text-center rounded-lg px-2">
        <FaGoogle></FaGoogle>
        <button>Login with Google</button>
      </div>
      <div className="flex items-center gap-2 border border-gray-800 py-2 text-center rounded-lg px-2">
        <FaGithub></FaGithub>
        <button>Login with GitHub</button>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-3">Find Us On</h3>
        <div className=" rounded-lg py-3 px-4">
          <div className="flex items-center border-2 border-gray-500 p-3 rounded-t-lg mb-3 gap-2">
            <FaFacebook></FaFacebook>
            <h4>Facebook</h4>
          </div>
          <div className="flex items-center border-2 border-gray-500 p-3 rounded-t-lg mb-3 gap-2">
            <FaTwitter></FaTwitter>
            <h4>Twitter</h4>
          </div>
          <div className="flex items-center border-2 border-gray-500 p-3 rounded-t-lg mb-3 gap-2">
            <FaInstagram></FaInstagram>
            <h4>Instagram</h4>
          </div>
          
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3 ">Q-Zone</h3>
        <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RigthSide;
