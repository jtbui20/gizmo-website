import { ContentScreenContainer } from "../../components";
import styles from "./GameSpecifications.module.css";

const GameSpecifications = () => {
  return (
    <ContentScreenContainer title="Specifications" id={styles.specs}>
      <table>
        <tbody>
          <tr>
            <th>Platform</th>
            <td>PC (Windows)</td>
          </tr>
          <tr>
            <th>Engine</th>
            <td>Unreal Engine</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>Action, 3D Platformer, Puzzle</td>
          </tr>
        </tbody>
      </table>
    </ContentScreenContainer>
  );
};

export default GameSpecifications;
