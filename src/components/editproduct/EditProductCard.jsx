import PatentIcon from "../../assets/PatentIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import CustomEditor from "./CustomEditor";
import SaveButton from "./SaveButton";
import { useState } from "react";
import { updateProduct } from "../../reducers/actions";
import { useDispatch } from "react-redux";

const EditProductCard = ({ name, img, description, type }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ name, description });
  const [updateStatus, setUpdateStatus] = useState("idle");

  const canUpdate =
    [product.name, product.description].every(Boolean) &&
    updateStatus === "idle";

  const handleDescription = (data) => {
    setProduct({ ...product, description: data });
  };
  const handleName = (e) => {
    setProduct({ ...product, name: e.target.value });
  };

  const saveProduct = async () => {
    if (canUpdate) {
      try {
        setUpdateStatus("pending");
        await dispatch(updateProduct(product)).unwrap();
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setUpdateStatus("idle");
      }
    }
  };

  return (
    <div className="flex flex-col relative">
      <div className="absolute top-0 left-0 bg-white flex items-center w-fit rounded-md">
        <PatentIcon />
        <span className="px-2.5 py-2 capitalize font-semibold text-secondary">
          {type}
        </span>
      </div>
      <div className="absolute top-0 right-0 p-3 bg-white cursor-pointer border-l-[1px] border-b-[1px] border-white">
        <DeleteIcon />
      </div>

      <img className="w-full h-[300px] object-cover" src={img} alt={name} />

      <div className="flex flex-col space-y-2.5 p-5 border-r-[1px] border-[#E5E7EB]">
        <input
          type="text"
          onChange={handleName}
          value={product.name}
          className="w-full bg-white border-[1px] font-semibold text-secondary rounded-md border-[#D1D5DB] px-2.5 py-1"
        />

        <CustomEditor
          handleChange={handleDescription}
          description={product.description}
        />

        <SaveButton disabled={!canUpdate} saveData={saveProduct} />
      </div>
    </div>
  );
};

export default EditProductCard;
