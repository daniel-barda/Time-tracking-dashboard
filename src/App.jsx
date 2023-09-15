import { useState } from "react";
import { data } from "./data";
import { Activity } from "./Components/Activity";
import { Aside } from "./Components/Aside";

function App() {
  const [isActivity, setIsActivity] = useState("Weekly");

  const handleSetActivity = (name) => {
    setIsActivity(name);
  };

  return (
    <main>
      <Aside isActivity={isActivity} onSetActivity={handleSetActivity} />

      <div className="activity-container">
        {data.map((activity, index) => (
          <Activity key={index} activity={activity} isActivity={isActivity} />
        ))}
      </div>
    </main>
  );
}

export default App;
