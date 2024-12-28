import PageContainer from "../container/PageContainer";
import "./Comp2.css";
function Comp2() {
  return (
    <div className="comp2">
      <PageContainer>
        <div className="comp2-container">
          <div className="comp2-box">
            <div className="comp2-title">The SenseCode</div>
            <div className="comp2-text">
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
            </div>
          </div>
          <div className="comp2-img-con">
            <img className="comp2-img" src="..//class.webp" alt="" />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Comp2;
