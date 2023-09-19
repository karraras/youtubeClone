import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

import ReactPlayer from "react-player";
import Loading from "./Loading";

function Results() {
  const { getResults, results, loading } = useGlobalContext();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      getResults("/trending/?lang=en&country=us&section=Now");
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="pt-[50px] flex-1 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {results?.videos?.slice(1, 10)?.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/${item?.video_id}`}
            className="flex flex-col gap-2 text-sm"
          >
            <ReactPlayer
              width="auto"
              height="auto"
              control
              url={`https://www.youtube.com/watch?v=${item?.video_id}`}
            />
            <div className="flex gap-2">
              <div className="h-10 w-10"></div>

              <div className="flex flex-col gap-2">
                <p className="text-white">{`${item?.title}`}</p>
                <div>
                  <p className="text-textColor">Be Amazed</p>
                  <div className="text-textColor flex items-center gap-1">
                    <span>{` views`}</span>
                    <span className="h-[2px] block w-[2px] rounded-full bg-white"></span>
                    <span>{item?.published_time}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Results;
