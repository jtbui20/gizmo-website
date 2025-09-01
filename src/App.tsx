import {
  AboutScreen,
  ContactFooter,
  GameplayScreen,
  HomeScreen,
  MediaScreen,
  TeamInfo,
  GameSpecifications,
} from "./sections";

import styles from "./components/ContentScreen/ContentScreen.module.css";
import { MediaProvider } from "./providers/MediaProvider";

function App() {
  return (
    <>
      <MediaProvider>
        <HomeScreen />
        <div className={styles.screenContainers}>
          <AboutScreen />
          <GameplayScreen />
          <MediaScreen />
          <TeamInfo />
          <GameSpecifications />
        </div>
        <ContactFooter />
      </MediaProvider>
    </>
  );
}

export default App;
