// import Header from "../components/header/Header";
// import Comp1 from "../components/comp1/Comp1";
// import Comp2 from "../components/comp2/Comp2";
// import Comp3 from "../components/comp3/Comp3";
import BentoGrid from "../components/bentogrid/BentoGrid";
import Feature from "../components/feature-section/Feature";
import Section from "../components/section/Section";
import Fsection from "../components/fsection/Fsection";
function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Comp1 />
      <Comp2 />
      <Comp3 /> */}
      <BentoGrid />
      <Fsection />
      <Feature />
      <Section />
    </div>
  );
}

export default Home;
