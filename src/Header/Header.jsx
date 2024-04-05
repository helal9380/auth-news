/** @format */
import moment from 'moment';
import logo from '../../src/assets/logo.png'
const Header = () => {

  return (
    <div className='text-center my-5'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
    </div>
  );
};

export default Header;
