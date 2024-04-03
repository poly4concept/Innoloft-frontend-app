const VideoSection = () => {
  return (
    <div className="bg-white border-[1px] border-[#E5E7EB] p-5 flex flex-col w-full">
      <h3 className="font-semibold text-secondary mb-5">Video</h3>
      <input
        type="text"
        placeholder="Add a youtube or vimeo link"
        className="w-full bg-white border-[1px] text-sm text-[#6B7280] rounded-md border-[#D1D5DB] px-2.5 py-1.5"
      />
    </div>
  );
};

export default VideoSection;
