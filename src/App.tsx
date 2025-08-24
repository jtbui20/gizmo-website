import "./App.css";
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
