import { useContext } from "react";
import { ContentScreenContainer } from "../../components";
import styles from "./MediaScreen.module.css";
import { MediaProviderContext } from "../../providers/MediaProvider";
// The content will create a fullscreen container for the selected media

type MediaContent = {
  name: string;
  type: string;
  imageSmall: string;
  url: string;
};

type MediaSectionProps = {
  screenshots: Array<MediaContent>;
  videos: Array<MediaContent>;
};

const MediaContext = (props: MediaSectionProps) => {
  return (
    <div className="media-context">
      <MediaTypeSection
        type="Screenshots"
        list={props.screenshots}
        hideCaption={true}
      />
      <MediaTypeSection type="Videos" list={props.videos} />
    </div>
  );
};

const MediaCard = (props: { item: MediaContent; hideCaptions: boolean }) => {
  const dispatch = useContext(MediaProviderContext);
  const onClick = () => {
    // @ts-expect-error -typing
    dispatch({
      type: "show",
      payload: { type: props.item.type, url: props.item.url },
    });
  };

  return (
    <div className={styles.mediaCard} onClick={onClick}>
      <img src={props.item.imageSmall} alt={props.item.name} />
      {!props.hideCaptions && <p>{props.item.name}</p>}
    </div>
  );
};

const MediaTypeSection = (props: {
  type: string;
  list: Array<MediaContent>;
  hideCaption?: boolean;
}) => {
  return (
    <div className={styles.mediaCategorySection}>
      <h2>{props.type}</h2>
      <ul>
        {props.list.map((item, index) => (
          <MediaCard
            key={index}
            item={item}
            hideCaptions={props.hideCaption || false}
          />
        ))}
      </ul>
    </div>
  );
};

const MediaScreen = () => {
  const placeholdImage: string =
    "https://placehold.co/460x200?text=920+x+400\nCard";
  const data: MediaSectionProps = {
    screenshots: [
      {
        name: "Card",
        type: "screenshot",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
      {
        name: "Card",
        type: "screenshot",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
      {
        name: "Card",
        type: "screenshot",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
    ],
    videos: [
      {
        name: "Card",
        type: "video",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
      {
        name: "Card",
        type: "video",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
      {
        name: "Card",
        type: "video",
        imageSmall: placeholdImage,
        url: "https://placehold.co/460x200?text=460+x+200\nCard",
      },
    ],
  };

  return (
    <ContentScreenContainer title="Media" id="media">
      <MediaContext {...data} />
    </ContentScreenContainer>
  );
};

export default MediaScreen;
