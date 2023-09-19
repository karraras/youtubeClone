import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import person from "../../public/person.jpg";
import { useGlobalContext } from "./Context";
function Navbar() {
  const { handleOpenSide, openSide, searchTerm, handleSearch } =
    useGlobalContext();
  return (
    <nav className="fixed w-full z-40 bg-black top-0 left-0">
      <div className="flex w-full gap-3 h-[40px] justify-between p-2">
        <div className="flex items-center gap-1 ">
          <span
            onClick={handleOpenSide}
            className={`text-white sm:hidden  cursor-pointer`}
          >
            {openSide ? <AiOutlineClose /> : <FaBars />}
          </span>
          <span className="bg-[#FF0000] rounded text-white  px-1 flex items-center justify-center">
            <BsFillPlayFill />
          </span>
          <p className="font-semibold  hidden sm:block text-white tracking-tighter">
            YouTube
          </p>
        </div>
        <div className="relative shadow-SideFocus flex rounded-full w-[200px]  sm:w-[300px] overflow-hidden  items-center  ">
          <form className="w-full h-full ">
            <input
              placeholder="Search"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchTerm}
              className=" bg-black block placeholder:text-white text-white h-full w-full pl-3 text-[12px] outline-none border-none"
            />
          </form>
          <span className="absolute shadow-search right-0 h-full  text-white px-2 bg-[#808080e3] flex items-center justify-center">
            <AiOutlineSearch />
          </span>
        </div>
        <div className="flex items-center  gap-4 text-white">
          <BiSolidVideoPlus className="hidden sm:block" />
          <MdOutlineNotifications className="hidden sm:block" />
          <span className="rounded-full overflow-hidden w-[20px] h-[20px]">
            <img src={person} alt="..." />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
