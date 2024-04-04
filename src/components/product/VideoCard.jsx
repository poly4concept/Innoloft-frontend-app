import ReactPlayer from 'react-player/lazy';

const VideoCard = ({ url }) => {
  return (
    <div className="bg-white border-[1px] border-[#E5E7EB] p-5 flex flex-col items-center w-full">
      <h3 className="font-semibold text-secondary self-start mb-5">Video</h3>
      <ReactPlayer width="90%" controls url={url} />
    </div>
  );
};

export default VideoCard;
