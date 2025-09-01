import styles from "./FullScreenMedia.module.css";
import {
  MediaContextA,
  MediaProviderContext,
} from "../../providers/MediaProvider";
import { useContext } from "react";

const FullScreenMediaDisplay = () => {
  const media = useContext(MediaContextA);
  const dispatch = useContext(MediaProviderContext);
  const onClick = () => {
    // @ts-expect-error - typing
    dispatch({ type: "hide", payload: { type: "", url: "" } });
  };
  return (
    <>
      {media.show && (
        <div id={styles.fullscreenMedia}>
          <div>
            <button onClick={onClick}>Close</button>
          </div>
          {media.type === "video" ? (
            <video controls autoPlay>
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag
            </video>
          ) : (
            <img src={media.url} alt="Full Screen Media" />
          )}
        </div>
      )}
    </>
  );
};

export default FullScreenMediaDisplay;
