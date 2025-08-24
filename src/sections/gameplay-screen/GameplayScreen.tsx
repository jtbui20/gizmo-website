// We actually have to put logic in here :sob:

import { ContentScreenContainer } from "../../components";
import type { SectionContentBindings } from "./components/SelectionContent";
import SelectionContext from "./components/SelectionContent";

const RobotsContent: Array<SectionContentBindings> = [
  {
    name: "Robot 1",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 1. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+1+Video",
  },
  {
    name: "Robot 2",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 2. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+2+Video",
  },
  {
    name: "Robot 3",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 3. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
  {
    name: "Robot 4",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 4. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
  {
    name: "Robot 5",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 5. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
];

const GameplayScreen = () => {
  return (
    <ContentScreenContainer title="Features - Gameplay">
      <SelectionContext content={RobotsContent} />
    </ContentScreenContainer>
  );
};

export default GameplayScreen;
