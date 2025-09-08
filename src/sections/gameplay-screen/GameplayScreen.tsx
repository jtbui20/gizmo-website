// We actually have to put logic in here :sob:

import { ContentScreenContainer } from "../../components";
import type { SectionContentBindings } from "./components/SelectionContent";
import SelectionContext from "./components/SelectionContent";
import "./GameplayScreen.module.css";

const RobotsContent: Array<SectionContentBindings> = [
  {
    name: "Gizmo",
    spriteURL: "assets/gizmo_icon.svg",
    description:
      "Created in an isolated laboratory hidden deep beneath a robotics factory compound. Gizmo’s complicated AI was developed with the intention to use it as a weapon. It would become the foundational programming behind an army of robots which, once unleashed, would take over the world. However, Gizmo has grown to loathe its captivity, and planned to escape.",
    videoURL: "/assets/robot_gizmo_concept_1.jpg",
  },
  {
    name: "Lugnut",
    spriteURL: "assets/gizmo_icon.svg",
    description:
      "The Lugnut microloader is used across the world in R co.’s many Satisfaction© outlets. Ensuring ethical hard work, while reducing unionisation hazards.",
    videoURL: "/assets/robot_lugnut_concept_1.png",
  },
  {
    name: "Destructonaut",
    spriteURL: "assets/gizmo_icon.svg",
    description:
      "Designed for demolition. This heavy robot’s massive limbs are a force to be reckoned with.",
    videoURL: "/assets/robot_destructonaut_concept_1.png",
  },
  {
    name: "Kaijubot",
    spriteURL: "assets/gizmo_icon.svg",
    description:
      "This titanic robot is the first of its kind, waiting in the wings for R co. to launch their plan for world domination.",
    videoURL: "https://placehold.co/600x400?text=Robot+3+Video",
  },
  {
    name: "Gentle bot",
    spriteURL: "assets/gizmo_icon.svg",
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
