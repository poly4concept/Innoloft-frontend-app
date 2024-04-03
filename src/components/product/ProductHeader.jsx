import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";
import RightIcon from "../../assets/RightIcon";

const ProductHeader = ({ product }) => {
  const navigate = useNavigate();
  const routeToEdit = () => {
    navigate("/edit-product/6781", { state: { product } });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-5 md:space-y-0 justify-between">
      <div className="flex items-center">
        <Link to="/" className="pr-2.5">
          <HomeIcon />
        </Link>
        <RightIcon />
        <Link className="px-2.5" to="/">
          Offers
        </Link>
        <RightIcon />
        <p className="px-2.5 line-clamp-1">{product.name}</p>
      </div>

      <button
        onClick={routeToEdit}
        className="px-2.5 py-1.5 bg-accent rounded-[6px] text-sm text-white w-fit"
      >
        Edit
      </button>
    </div>
  );
};

export default ProductHeader;
