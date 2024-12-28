import PageContainer from "../container/PageContainer";
import "./Comp1.css";
function Comp1() {
  return (
    <div className="comp1">
      <PageContainer>
        {/* <div className="comp1-container">
          <div className="comp1-title">
            We Are Wander
            <hr className="comp1-hr" />
          </div>

          <div className="properties">
            <div>
              <img src="vite.svg" alt="" />
              <div>title1 Lorem, ipsum dolor.</div>
            </div>
            <div>
              <img src="vite.svg" alt="" />
              <div>title2</div>
            </div>
            <div>
              <img src="vite.svg" alt="" />
              <div>title3</div>
            </div>
            <div>
              <img src="vite.svg" alt="" />
              <div>title4</div>
            </div>
          </div>
          <div className="property-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            delectus, ducimus vitae <br /> odit possimus illo aut omnis
            aspernatur sapiente. Molestias, eius exercitationem. Quasi, odio quo{" "}
            <br />
            quis minima facilis magnam reiciendis!
          </div>
        </div> */}
        <div className="comp1-container">
          <div className="left">
            <div className="title-one">My Skillset</div>
            <div className="title-two">
              Web And Mobile Programming, Design & More
            </div>
            <div className="comp1-btn">
              <div className="comp12-btn-in">Learn more</div>
            </div>
          </div>
          <div className="right">
            <p className="text">
              The aim of the project is to support economic development and
              enhance social welfare in Turkey through improving programming
              skills of children with visually impairment. Within this project,
              an instructional design was developed, including learning
              materials and teacher training programme, to provide programming
              education for those special children group. According to the 2011
              Population and Housing Survey results, the rate of population with
              at least one disability (age 3+) is 6.9% (4,876,000) in Turkey.
              Among these, 1,039,000 are blind or visually impaired. According
              to the Turkish Employment Agency, 2,844 people with visually
              impairment has been working in public, and 7,523 in private
              institutions and organizations, in 2019. Therefore, this project
              is important, having the impact positively on future employment,
              in terms of being a resource to meet the needs of children with
              visually impairment.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Comp1;
