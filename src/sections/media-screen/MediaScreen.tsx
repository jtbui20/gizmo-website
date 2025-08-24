import { ContentScreenContainer } from "../../components";

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
      <MediaTypeSection type="Screenshots" list={props.screenshots} />
      <MediaTypeSection type="Videos" list={props.videos} />
    </div>
  );
};

const MediaCard = (props: MediaContent) => {
  return (
    <div className="media-card">
      <img src={props.imageSmall} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

const MediaTypeSection = (props: {
  type: string;
  list: Array<MediaContent>;
}) => {
  return (
    <div className="media-category-section">
      <h2>{props.type}</h2>
      <ul>
        {props.list.map((item, index) => (
          <MediaCard key={index} {...item} />
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
    <ContentScreenContainer title="Media">
      <MediaContext {...data} />
    </ContentScreenContainer>
  );
};

export default MediaScreen;
