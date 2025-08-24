type KeyContentProps = {
  direction?: "horizontal" | "vertical";
  description: string;
  imageUrl: string;
};

const KeyContent = (props: KeyContentProps) => {
  return (
    <div className={`key-content-frame key-${props.direction || "horizontal"}`}>
      <p>{props.description}</p>
      <img src={props.imageUrl} alt="key content" />
    </div>
  );
};

export default KeyContent;
