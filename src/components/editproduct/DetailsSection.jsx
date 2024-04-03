import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../reducers/actions";
import SettingsIcon from "../../assets/SettingsIcon";
import TagsInput from "react-tagsinput";
import BusinessIcon from "../../assets/BusinessIcon";
import ClockIcon from "../../assets/ClockIcon";
import CostIcon from "../../assets/CostIcon";
import SaveButton from "./SaveButton";

import "react-tagsinput/react-tagsinput.css";

const DetailsSection = ({
  categories,
  businessModels,
  trl,
  investmentEffort,
}) => {
  const dispatch = useDispatch();
  const trls = useSelector((state) => state.trl);
  const [productDetails, setProductDetails] = useState({
    categories: categories.map((category) => category.name),
    businessModels: businessModels.map((model) => model.name),
    trl,
    investmentEffort,
  });
  const [updateStatus, setUpdateStatus] = useState("idle");

  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const handleTechnologiesChange = (tags) => {
    setProductDetails({ ...productDetails, categories: tags });
  };
  const handleModelsChange = (tags) => {
    setProductDetails({ ...productDetails, businessModels: tags });
  };

  const saveProductDetails = async () => {
    try {
      setUpdateStatus("pending");
      await dispatch(updateProduct(productDetails)).unwrap();
    } catch (err) {
      console.error("Failed to save the post: ", err);
    } finally {
      setUpdateStatus("idle");
    }
  };
  return (
    <div className="bg-white border-[1px] border-[#E5E7EB] p-5 pt-7 flex flex-col space-y-5">
      <h3 className="font-semibold text-secondary">Offer Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
        <div className="flex space-x-1">
          <SettingsIcon />
          <div className="flex flex-col space-y-2.5 w-full">
            <p>Technology</p>
            <TagsInput
              value={productDetails.categories}
              onChange={handleTechnologiesChange}
            />
          </div>
        </div>

        <div className="flex space-x-1">
          <BusinessIcon />
          <div className="flex flex-col space-y-2.5 w-full">
            <p>Business Model</p>
            <TagsInput
              value={productDetails.businessModels}
              onChange={handleModelsChange}
            />
          </div>
        </div>

        <div className="flex space-x-1">
          <ClockIcon />
          <div className="flex flex-col space-y-2.5 w-full">
            <p>TRL</p>
            <select
              value={productDetails.trl}
              name="trl"
              onChange={handleInputChange}
              className="w-full border-[1px] text-sm text-secondary rounded-md border-[#D1D5DB] pl-2 pr-1 py-1"
            >
              {trls.map((trl) => (
                <option className="" value={trl.name} key={trl.id}>
                  {trl.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-1">
          <CostIcon />
          <div className="flex flex-col space-y-2.5 w-full">
            <p>Costs</p>
            <input
              type="text"
              name="investmentEffort"
              value={productDetails.investmentEffort}
              onChange={handleInputChange}
              placeholder="Enter rough cost e.g (< 1000 €)"
              className="w-full bg-white border-[1px] text-sm text-secondary rounded-md border-[#D1D5DB] px-2.5 py-1"
            />
          </div>
        </div>
      </div>

      <SaveButton
        disabled={updateStatus === "pending"}
        saveData={saveProductDetails}
      />
    </div>
  );
};

export default DetailsSection;
