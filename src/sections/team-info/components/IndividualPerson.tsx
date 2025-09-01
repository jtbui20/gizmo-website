type IndividualPersonProps = {
  name: string;
  imageUrl: string;
  socialLinks: string;
  role: string[];
};

const IndividualPerson = (props: IndividualPersonProps) => {
  return (
    <li className="individual-person">
      <img src={props.imageUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.role.join(", ")}</p>
      <div className="social-links">{props.socialLinks}</div>
    </li>
  );
};

export default IndividualPerson;
