// We actually have to put logic in here :sob:

import { ContentScreenContainer } from "../../components";
import type { SectionContentBindings } from "./components/SelectionContent";
import SelectionContext from "./components/SelectionContent";
import "./GameplayScreen.module.css";

const RobotsContent: Array<SectionContentBindings> = [
  {
    name: "Gizmo",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 1. It has unique features and abilities that make it stand out in the game.",
    videoURL: "/assets/luggers.png",
  },
  {
    name: "Lugnut",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 2. It has unique features and abilities that make it stand out in the game.",
    videoURL: "/assets/turrets.png",
  },
  {
    name: "Destructonaut",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 3. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
  {
    name: "Kaijubot",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 4. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
  {
    name: "Gentle bot",
    spriteURL: "https://placehold.co/128x128",
    description:
      "This is a description for Robot 5. It has unique features and abilities that make it stand out in the game.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
];

const GameplayScreen = () => {
  return (
    <ContentScreenContainer title="Features - Gameplay" id="gameplay">
      <SelectionContext content={RobotsContent} />
    </ContentScreenContainer>
  );
};

export default GameplayScreen;
