import person from "../images/image-jeremy.png";
import { Button } from "./Button";

export const Aside = ({ isActivity, onSetActivity }) => {
  return (
    <aside>
      <header>
        <img src={person} alt="person img" />
        <div className="report-header">
          <span>Report for</span>
          <h2>Jeremy robson</h2>
        </div>
      </header>

      <ul>
        <li>
          <Button onSetActivity={onSetActivity} isActivity={isActivity}>
            Daily
          </Button>
        </li>
        <li>
          <Button onSetActivity={onSetActivity} isActivity={isActivity}>
            Weekly
          </Button>
        </li>
        <li>
          <Button onSetActivity={onSetActivity} isActivity={isActivity}>
            Monthly
          </Button>
        </li>
      </ul>
    </aside>
  );
};
