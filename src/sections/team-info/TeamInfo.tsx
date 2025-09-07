import { ContentScreenContainer } from "../../components";
import IndividualPerson from "./components/IndividualPerson";
import styles from "./TeamInfo.module.css";

const people = [
  {
    name: "Elias Taylor",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Lead Designer"],
  },
  {
    name: "Kimlong Ronan Leng",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Lead Programmer"],
  },
  {
    name: "Tyler Bretherton",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Artist"],
  },
  {
    name: "James Bui",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Web Developer", "Marketing"],
  },
  {
    name: "Liam Crook",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Programmer"],
  },
  {
    name: "Ben Fekete",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Programmer"],
  },
  {
    name: "Peter Luong",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Level Designer"],
  },
  {
    name: "Raymond Luu",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Artist"],
  },
  {
    name: "Richard Son",
    imageUrl: "https://placehold.co/128x128",
    socialLinks: "",
    role: ["Sound Engineer"],
  },
];

// const layoutConfig = [2, 5, 3];

const TeamInfo = () => {
  return (
    <ContentScreenContainer title="The Team" id={styles.team}>
      <ul>
        {people.map((person) => (
          <IndividualPerson
            key={person.name}
            name={person.name}
            imageUrl={person.imageUrl}
            socialLinks={person.socialLinks}
            role={person.role}
          />
        ))}
      </ul>
    </ContentScreenContainer>
  );
};

export default TeamInfo;
