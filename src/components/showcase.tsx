import { noellesArk, theLastDiner, trackline } from "@/data/games";
import "../styles/showcase.css";

import ShowcaseRow from "./showcase-row";

const Showcase = () => {
  return (
    <div className="showcase">
      <ShowcaseRow game={theLastDiner} />
      <ShowcaseRow game={trackline} reverse={true} />
      <ShowcaseRow game={noellesArk} />
    </div>
  );
};

export default Showcase;
