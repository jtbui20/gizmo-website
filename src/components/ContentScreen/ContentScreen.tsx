type ContentScreenProps = {
  title: string;
  children: React.ReactNode;
};

const ContentScreen = (props: ContentScreenProps) => {
  return (
    <section className="screen-content">
      <h1>{props.title}</h1>
      <div className="screen-content-body">{props.children}</div>
    </section>
  );
};

export default ContentScreen;
