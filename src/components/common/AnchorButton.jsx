import { Link } from "react-router-dom";

const AnchorButton = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="px-2.5 py-1.5 bg-accent rounded-[6px] text-sm text-white w-fit"
    >
      {text}
    </Link>
  );
};

export default AnchorButton;
