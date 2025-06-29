import "./Activities.css";
import TwitterPost from "../../components/twitterpost/TwitterPost";
import ActivityFlow from "../../components/ActivityFlow";
import WhoWeAre from "../../components/WhoWeAre";

function Activities() {
  return (
    <div>
      <ActivityFlow />
      <TwitterPost />
      <WhoWeAre />
    </div>
  );
}

export default Activities;
