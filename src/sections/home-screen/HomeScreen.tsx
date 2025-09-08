import content_styles from "../../components/ContentScreen/ContentScreen.module.css";
import styles from "./HomeScreen.module.css";

const BackgroundVideo = (props: { src: string }) => {
  return (
    <div id={styles.videoFrame}>
      <video autoPlay loop muted>
        <source src={props.src} type="video/webm" />
      </video>
    </div>
  );
};

const DownloadFooter = () => {
  return (
    <div id={styles.homeFooterList}>
      <img
        className={styles.badge}
        src="assets/itchio-badge.svg"
        alt="Try on itch.io"
      />
    </div>
  );
};

const HomeScreen = () => {
  return (
    <div className={content_styles.screenContent + " " + content_styles.full}>
      <BackgroundVideo src="assets/bg-reel.webm" />
      <div id={styles.homeContent}>
        <div id={styles.homeHeader}>
          <img src="assets/gizmo_logo.png" alt="Logo" />
        </div>
        <DownloadFooter />
      </div>
    </div>
  );
};

export default HomeScreen;
