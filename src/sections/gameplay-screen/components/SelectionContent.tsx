import KeyContent from "../../../components/KeyContent/KeyContent";
import styles from "./SelectionContext.module.css";

type SectionContentBindings = {
  name: string;
  spriteURL: string;
  description: string;
  videoURL: string;
};
const SelectionItem = (props: { name: string; spriteURL: string }) => {
  return (
    <li className={styles.selectionItem}>
      <img src={props.spriteURL} alt={props.name} />
      <p>{props.name}</p>
    </li>
  );
};

const SelectionContext = (props: {
  content: Array<SectionContentBindings>;
}) => {
  const selected = props.content[0];
  return (
    <div className={styles.selectionContext}>
      <ul>
        {props.content.map((data) => {
          return (
            <SelectionItem
              key={data.name}
              name={data.name}
              spriteURL={data.spriteURL}
            />
          );
        })}
      </ul>
      <KeyContent
        direction="key-vertical"
        description={selected.description}
        imageUrl={selected.videoURL}
      />
    </div>
  );
};

export default SelectionContext;
export type { SectionContentBindings };
