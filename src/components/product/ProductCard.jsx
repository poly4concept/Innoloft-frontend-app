import PatentIcon from "../../assets/PatentIcon";
import { sanitizeData } from "../../utils/helperFunctions";

const ProductCard = ({ name, img, description, type }) => {
  const sanitizedData = sanitizeData(description);

  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 left-0 bg-white flex items-center w-fit rounded-md">
        <PatentIcon />
        <span className="px-2.5 py-2 capitalize font-semibold text-secondary">
          {type}
        </span>
      </div>
      <img className="w-full h-[300px] object-cover" src={img} alt={name} />
      <div className="flex flex-col space-y-2.5 p-5 border-r-[1px] border-[#E5E7EB]">
        <h3 className="font-semibold text-secondary">{name}</h3>
        <p dangerouslySetInnerHTML={sanitizedData} className="text-sm" />
      </div>
    </div>
  );
};

export default ProductCard;
