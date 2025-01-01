import "../timeline/Timeline.css";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
function Timeline() {
  return (
    <div className="">
      <div className="timeline py-8">
        <div className="kapsa-row py-12">
          <div className="row-nokta"></div>
          <div
            className="container left text-end"
            style={{marginBottom: "-60px", margin: "auto"}}
          >
            <div
              className="content"
              style={{
                minWidth: "29%",
                maxWidth: "150px",
                borderRadius: "50%",
                border: "2px solid red",
              }}
            >
              <SportsScoreIcon style={{fontSize: "100px"}} />
            </div>
          </div>
          <div className="container right">
            <div className="content border">
              <h2>2016</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                quos hic laborum sed tenetur tempore quis nemo itaque dolores
                aut alias, ipsa a inventore assumenda, ipsum delectus vel
                suscipit quas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
