import SaveIcon from "../../assets/SaveIcon";

const SaveButton = ({ disabled, saveData }) => {
  return (
    <button
      onClick={saveData}
      type="button"
      disabled={disabled}
      className="self-end px-2.5 py-1.5 bg-accent rounded-[6px] text-sm text-white w-fit flex items-center space-x-1 cursor-pointer disabled:opacity-50"
    >
      <SaveIcon />
      <span className="text-sm">Save</span>
    </button>
  );
};

export default SaveButton;
