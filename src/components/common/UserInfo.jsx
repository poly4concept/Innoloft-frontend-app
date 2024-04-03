import LocationIcon from "../../assets/LocationIcon";

const UserInfo = ({ company_name, company_logo, user_name, user_picture }) => {
  return (
    <div className="flex flex-col p-5">
      <p className="font-semibold mb-2">Offered By</p>
      <img
        className="w-[200px] object-cover"
        src={company_logo}
        alt={company_name}
      />

      <div className="flex items-center space-x-4 mt-2.5">
        <img
          src={user_picture}
          className="rounded-full object-cover w-[60px] h-[60px]"
          alt="profile"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-sm">{user_name}</p>
          <p className="text-sm">{company_name}</p>
        </div>
      </div>

      <div className="flex w-fit mt-5">
        <LocationIcon />
        <span className="text-sm">
          Jülicher Straße 72a, <br /> 52070 Aachen, Germany
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
