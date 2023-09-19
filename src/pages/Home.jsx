import SideBar from "../component/SideBar";
import Results from "../component/Results";
function Home() {
  return (
    <div className="flex gap-3 relative   ">
      <SideBar />
      <Results />
    </div>
  );
}

export default Home;
