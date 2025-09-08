import { ContentScreenContainer } from "../../components";
import KeyContent from "../../components/KeyContent/KeyContent";
import styles from "./AboutScreen.module.css";

const AboutScreen = () => {
  return (
    <ContentScreenContainer title="About - Catch Phrase" id="about">
      <div className={styles["key-content-list"]}>
        <KeyContent
          description="Take on the role of an adorable sentient robot trying to escape from a massive robotics factory preparing to take control of the world. While it may be small and weak, it can latch onto and possess other robots to make use of their strength and abilities to progress through each stage."
          imageUrl="/assets/gizmo_pepega.png"
        />
        <KeyContent
          description="Gizmo is a puzzle-combat action game where players parasitically possess enemy robots to make use of their abilities to overcome obstacles and enemies, and finally escape the factory where they were made."
          imageUrl="https://placehold.co/600x400"
        />
      </div>
    </ContentScreenContainer>
  );
};

export default AboutScreen;
