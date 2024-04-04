const Label = ({ text }) => {
  return (
    <div title={text} className="bg-[#E5E7EB] py-[5px] px-3.5 rounded-[20px] text-sm text-[#6B7280] w-fit line-clamp-1">
      {text}
    </div>
  );
};

export default Label;
