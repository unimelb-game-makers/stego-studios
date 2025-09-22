import { noellesArk, theLastDiner, trackline } from "@/data/games";
import "../styles/showcase.css";

import ShowcaseRow from "./showcase-row";

const Showcase = () => {
  return (
    <div className="showcase">
      <ShowcaseRow game={theLastDiner} reverse={true} />
      <ShowcaseRow game={trackline} />
      <ShowcaseRow game={noellesArk} reverse={true} />
    </div>
  );
};

export default Showcase;
