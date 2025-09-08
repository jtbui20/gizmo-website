import styles from "./ImageRowContent.module.css";

type ImageAssetProps = {
  assets: string[];
};

const ImageRowContent = (props: ImageAssetProps) => {
  return (
    <div className={styles.imageRowContent}>
      {props.assets.map((asset, index) => (
        <img key={index} src={asset} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageRowContent;
