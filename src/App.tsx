import "./App.css";
import FullScreenMedia from "./components/FullScreenMedia/FullScreenMedia";
import "./css/reso.css";
import {
  AboutScreen,
  ContactFooter,
  GameplayScreen,
  HomeScreen,
  MediaScreen,
  TeamInfo,
} from "./sections";

function App() {
  return (
    <>
      {/* <FullScreenMedia type="video" url="sample-video.mp4" /> */}
      <HomeScreen />
      <div className="screen-containers">
        <AboutScreen />
        <GameplayScreen />
        <MediaScreen />
        <TeamInfo />
      </div>
      <ContactFooter />
    </>
  );
}

export default App;
