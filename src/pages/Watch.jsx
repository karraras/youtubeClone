import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../component/Context";
import Loading from "../component/Loading";
function Watch() {
  const { results, loading } = useGlobalContext();
  const { useId } = useParams();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container flex flex-col sm:flex-row gap-5">
      <div className="sm:w-4/6 pt-[50px] sm:pt-0 sm:h-screen flex  items-center justiry-center">
        <ReactPlayer
          control
          width="100%"
          height="300px"
          url={`https://www.youtube.com/watch?v=${useId}`}
        />
      </div>
      <div className="sm:w-2/6 flex flex-col gap-2 sm:pt-[50px]">
        {results?.videos
          ?.filter((item) => item.video_id !== useId)
          ?.slice(1, 10)
          ?.map((item, index) => {
            return (
              <Link key={index} className="grid grid-cols-2  gap-3 ">
                <div>
                  <ReactPlayer
                    width="auto"
                    height="auto"
                    control
                    url={`https://www.youtube.com/watch?v=${item?.video_id}`}
                  />
                </div>
                <div className="flex flex-col text-[12px]  gap-2 items-start justify-center">
                  <p className="text-white">{`${item?.title}`}</p>

                  <div>
                    <p className="text-textColor">Be Amazed</p>
                    <div className="text-textColor flex items-center gap-1">
                      <span>{`4979116k views`}</span>
                      <span className="h-[2px] block w-[2px] rounded-full bg-white"></span>
                      <span>{item?.published_time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Watch;
