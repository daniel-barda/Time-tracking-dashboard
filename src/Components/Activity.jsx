import { IconMenu_horizontal } from "../assets/IconMenu";

export function Activity({
  isActivity,
  activity: { title, color, timeframes, icon },
}) {
  const period = timeframes[isActivity.toLowerCase()];

  return (
    <div className="activity">
      <div
        style={{ backgroundColor: `var(${color})` }}
        className="activity__bg"
      >
        <img src={icon} alt="SVG logo image" />
      </div>
      <header className="activity__header">
        <span>{title}</span>
        <IconMenu_horizontal />
      </header>

      <div className="activity-report">
        <p className="activity__hours">{period?.current}hrs</p>
        <span className="activity__timeframes">
          Last Week - {period?.previous}hrs
        </span>
      </div>
    </div>
  );
}
