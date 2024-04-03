import SettingsIcon from "../../assets/SettingsIcon";
import Label from "../common/Label";
import BusinessIcon from "../../assets/BusinessIcon";
import ClockIcon from "../../assets/ClockIcon";
import CostIcon from "../../assets/CostIcon";

const DetailsCard = ({ categories, businessModels, trl, investmentEffort }) => {
  return (
    <div className="bg-white border-[1px] border-[#E5E7EB] p-5 pt-7 flex flex-col">
      <h3 className="font-semibold text-secondary">Offer Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mt-5">
        <div className="flex space-x-1">
          <SettingsIcon />
          <div className="flex flex-col space-y-2.5">
            <p>Technology</p>
            <div className="flex flex-wrap items-center space-x-1 space-y-1">
              {categories.map((category) => (
                <Label key={category.id} text={category.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-1">
          <BusinessIcon />
          <div className="flex flex-col space-y-2.5">
            <p>Business Model</p>
            <div className="flex flex-wrap items-center space-x-1 space-y-1">
              {businessModels.map((model) => (
                <Label key={model.id} text={model.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-1">
          <ClockIcon />
          <div className="flex flex-col space-y-2.5">
            <p>TRL</p>
            <div className="flex items-center w-full space-x-1">
              <Label text={trl} />
            </div>
          </div>
        </div>

        <div className="flex space-x-1">
          <CostIcon />
          <div className="flex flex-col space-y-2.5">
            <p>Costs</p>
            <div className="flex items-center space-x-1">
              <Label text={investmentEffort} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
