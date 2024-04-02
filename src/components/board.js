import React, { useState } from "react";
import Profiles from "./profiles";
import { Leaderboard } from "./database";

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="board">
      <h1 className="leaderboard">5v5 Leaderboard</h1>

      <div className="duration">
        <button
          onClick={handleClick}
          data-id="0"
          style={{ marginBottom: "0em" }}
        >
          All-Time
        </button>
        <button>7 Days (Coming Soon)</button>
        <button>24hr (Coming Soon)</button>
      </div>

      <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
    </div>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  return filter.sort((a, b) => {
    if (a.winrate === b.winrate) {
      return b.winrate - a.winrate;
    } else {
      return b.winrate - a.winrate;
    }
  });
}
