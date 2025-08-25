type FullScreenMediaProps = {
  type: "video" | "screenshot";
  url: string;
};

const FullScreenMedia = (props: FullScreenMediaProps) => {
  return (
    <div id="fullscreen-media">
      <div>
        <button>Close</button>
      </div>
      {props.type === "video" ? (
        <video controls autoPlay>
          <source src={props.url} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      ) : (
        <img src={props.url} alt="Full Screen Media" />
      )}
    </div>
  );
};

export default FullScreenMedia;
