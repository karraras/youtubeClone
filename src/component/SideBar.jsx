import { AiFillHome, AiTwotoneTrophy, AiOutlineFlag } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { MdLiveTv, MdOutlineFeedback } from "react-icons/md";
import { BsFire, BsLightbulb, BsMusicNote } from "react-icons/bs";
import { PiFilmStripDuotone } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiGlobeRing, GiGamepad } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";
function SideBar() {
  const { handleClicked, clicked, openSide } = useGlobalContext();
  const SideItem = [
    {
      name: "Home",
      url: "/Home",

      icon: <AiFillHome />,
    },
    {
      name: "Trending",
      url: "/Trending",

      icon: <BsFire />,
    },
    {
      name: "Music",
      url: "/Music",

      icon: <BsMusicNote />,
    },
    {
      name: "Films",
      url: "/Films",

      icon: <PiFilmStripDuotone />,
    },
    {
      name: "Live",
      url: "/Live",

      icon: <MdLiveTv />,
    },
    {
      name: "Gaming",
      url: "/Gaming",

      icon: <GiGamepad />,
    },
    {
      name: "News",
      url: "/News",

      icon: <FaNewspaper />,
    },
    {
      name: "Sports",
      url: "/Sports",

      icon: <AiTwotoneTrophy />,
    },
    {
      name: "Learning",
      url: "/Learning",

      icon: <BsLightbulb />,
    },
    {
      name: "Fashion & beauty",
      url: "/Fashion & beauty",

      icon: <GiGlobeRing />,
    },
    {
      sperate: "",
    },
    {
      name: "Settings",

      icon: <FiSettings />,
    },
    {
      name: "Report History",
      url: "/Report History",

      icon: <AiOutlineFlag />,
    },
    {
      name: "Help",
      url: "/Help",

      icon: <BiHelpCircle />,
    },
    {
      name: "Send feedback",
      url: "/Send feedback",

      icon: <MdOutlineFeedback />,
    },
    {
      sperate: "",
    },
  ];
  return (
    <div
      className={` w-[170px]  z-30 duration-300 ${
        openSide ? "left-0" : "-left-full"
      }  px-3 absolute sm:relative sm:left-0 -left-full sm:block  h-screen pt-[50px] bg-black`}
    >
      {SideItem.map((item, index) => {
        return (
          <NavLink
            to={item.url}
            key={index}
            onClick={() => handleClicked(index)}
            className={` ${clicked === index && "bg-bgColor"}  ${
              item?.sperate === "" ? "h-[1px] my-3 bg-bgColor p-0" : "p-1"
            }  flex text-white items-center gap-2 text-[10px] pointer hover:bg-bgColor rounded  my-1 `}
          >
            <span>{item?.icon}</span>
            <span>{item?.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBar;
