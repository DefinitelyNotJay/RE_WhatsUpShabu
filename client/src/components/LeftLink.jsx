import "../index.css";
import { Link } from "react-router-dom";
import MyIcon from "./MyIcon";
const LeftLink = ({ name, link, icon }) => {
  return (
    <Link
      to={link}
      className="w-full flex justify-center gap-1 px-4 py-4 bg-white rounded-md"
    >
      <MyIcon Icon={icon} color={"black"} />
      <span>{name}</span>
    </Link>
  );
};

export default LeftLink;
