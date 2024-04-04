import { Link } from 'react-router-dom';
import GroupIcon from '../../assets/GroupIcon';
import HomeIcon from '../../assets/HomeIcon';
import ProductIcon from '../../assets/ProductIcon';
import ProfileImg from '../../assets/profile.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-4">
        <img src={ProfileImg} className="rounded-full object-cover w-[70px] h-[70px]" alt="profile" />
        <div className="flex flex-col">
          <p className="font-semibold text-md">Sven Pietsch</p>
          <p className="text-sm">Innoloft GmbH</p>
        </div>
      </div>

      <Link
        to="/"
        className="flex items-center space-x-2 mt-2.5 w-full py-3 px-2.5 cursor-pointer rounded hover:bg-[#f1f1f1]"
      >
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link
        to="/product/6781"
        className="flex items-center space-x-2 w-full py-3 px-2.5 cursor-pointer rounded hover:bg-[#f1f1f1]"
      >
        <ProductIcon />
        <span>Product 6781</span>
      </Link>
      <div className="flex items-center space-x-2 w-full py-3 px-2.5 cursor-pointer rounded hover:bg-[#f1f1f1]">
        <GroupIcon />
        <span>Members</span>
      </div>
    </div>
  );
};

export default Sidebar;
