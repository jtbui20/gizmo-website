import { ContentScreenContainer } from "../../components";
import KeyContent from "../../components/KeyContent/KeyContent";

const AboutScreen = () => {
  return (
    <ContentScreenContainer title="About - Catch Phrase" id="about">
      <div className="key-content-list">
        <KeyContent
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          imageUrl="/assets/gizmo_pepega.png"
        />
        <KeyContent
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          imageUrl="https://placehold.co/600x400"
        />
      </div>
    </ContentScreenContainer>
  );
};

export default AboutScreen;
