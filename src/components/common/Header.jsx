import { Link } from 'react-router-dom';
import InnoloftLogo from '../../assets/logo.svg';
import MessengerIcon from '../../assets/MessengerIcon';
import AccordionDownIcon from '../../assets/AccordionDownIcon';
import NotificationsIcon from '../../assets/NotificationsIcon';
import ProfileImg from '../../assets/profile.png';

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-5 items-center justify-between w-full px-[9%] py-3.5 bg-accent">
      <Link to="/" className="col-span-1">
        <img className="w-[140px]" src={InnoloftLogo} alt="Innoloft logo" />
      </Link>

      <div className="hidden lg:flex col-span-4 items-center justify-between">
        <input
          type="text"
          placeholder="Enter interests, keyword, company name, etc."
          className="w-[500px] rounded pl-2 py-1.5 text-xs"
        />

        <div className="flex items-center space-x-4">
          <MessengerIcon />
          <div className="flex items-center text-white space-x-1 cursor-pointer">
            <span>EN</span>
            <AccordionDownIcon />
          </div>
          <NotificationsIcon />
          <div className="flex items-center text-white space-x-1 cursor-pointer">
            <img src={ProfileImg} className="rounded-full bg-cover w-6 h-6" alt="profile" />
            <AccordionDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
