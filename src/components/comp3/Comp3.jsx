import PageContainer from "../container/PageContainer";
import "./Comp3.css";
import GroupsIcon from "@mui/icons-material/Groups";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
function Comp3() {
  return (
    <div className="comp3">
      <PageContainer>
        <div className="comp3-container">
          <div className="comp3-boxes">
            {/* <div className="comp3-boxes-col">
              <div className="col">
                <div>
                  <div className="comp3-boxes-title">
                    Be familiar with <br /> stunning design
                  </div>
                </div>
              </div>
            </div> */}
            <div className="comp3-boxes-col">
              <div className="col">
                <DesignServicesIcon className="comp3-boxes-logo" />
                <div>
                  <div className="title">Instructional Design</div>
                  <div className="text">
                    To create an instructional design which is effective on
                    improving programming skills of blind and visually impaired
                    children.
                  </div>
                </div>
              </div>
              <div className="col">
                <PsychologyIcon className="comp3-boxes-logo" />
                <div>
                  <div className="title">Know-How</div>
                  <div className="text">
                    To gain know-how to implement successfully the processes of
                    user experience design and accessibility testing for
                    learning materials targeting blind and visually impaired
                    children
                  </div>
                </div>
              </div>
            </div>
            <div className="comp3-boxes-col">
              <div className="col">
                <SettingsAccessibilityIcon className="comp3-boxes-logo" />
                <div>
                  <div className="title">Accessibility and Inclusion</div>
                  <div className="text">
                    To design and develop learning materials, which target blind
                    and visually impaired children, gender friendly and with
                    high accessibility scores
                  </div>
                </div>
              </div>
              <div className="col">
                <GroupsIcon className="comp3-boxes-logo" />
                <div>
                  <div className="title">Collaboration</div>
                  <div className="text">
                    To build a network of research partners to collaborate in
                    future
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Comp3;
