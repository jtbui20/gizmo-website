import styles from "./KeyContent.module.css";

type KeyContentProps = {
  direction?: "key-horizontal" | "key-vertical";
  description: string;
  imageUrl: string;
};

const KeyContent = (props: KeyContentProps) => {
  return (
    <div
      className={
        styles.keyContentFrame +
        " " +
        styles[props.direction || "key-horizontal"]
      }
    >
      <p>{props.description}</p>
      <img src={props.imageUrl} alt="key content" />
    </div>
  );
};

export default KeyContent;
