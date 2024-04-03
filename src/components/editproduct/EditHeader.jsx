import AnchorButton from "../common/AnchorButton";

const EditHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-5 md:space-y-0 justify-between">
      <h2 className="font-semibold">Offer Title</h2>
      <AnchorButton text="View Offer" url="/product/6781" />
    </div>
  );
};

export default EditHeader;
