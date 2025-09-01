import styles from "./ContentScreen.module.css";

type ContentScreenProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

const ContentScreen = (props: ContentScreenProps) => {
  return (
    <section className={styles.screenContent} id={props.id}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </section>
  );
};

export default ContentScreen;
