import VisionMission from "../components/VisionMission";
import ProjectTeam from "../components/ProjectTeam";
import WhoWeAre from "../components/WhoWeAre";
import Impact from "../components/Impact";
import Methodology from "../components/Methodology";
import Objectives from "../components/Objectives";
import SdgValueAhead from "../components/SdgValueAhead";
import BentoGrid from "../components/BentoGrid";
import classImg from "../assets/class.webp";

function About() {
  const textProps = [
    {
      title: "Our Vision",
      content: (
        <>
          At SenseCode-AI, we envision a world where every child, regardless of
          ability, can learn, create, and thrive in the digital era. As
          artificial intelligence becomes a central driver of innovation and
          opportunity, we believe it is crucial that visually impaired children
          are not left behind. Our project aims to eliminate barriers and build
          bridges—by developing inclusive learning tools, innovative curricula,
          and research-based educational strategies that make AI education
          accessible to all.
        </>
      ),
      img: classImg,
      rowReverse: false,
    },
    {
      title: "Our Mission",
      content: (
        <>
          SenseCode-AI is an international research and development initiative
          that strives to: <br />• Promote equitable access to computer science
          and artificial intelligence (AI) education for children with visual
          impairments, <br />
          • Foster confidence, creativity, and technological literacy among
          underserved learners, <br />
          • Build scalable, inclusive models of AI education that can be adopted
          globally. <br />
          By equipping visually impaired students with AI skills, we aim to open
          new paths for personal empowerment, educational success, and
          professional achievement.
        </>
      ),
      img: classImg,
      rowReverse: true,
    },
  ];
  return (
    <div>
      <BentoGrid />
      {textProps.map((props, i) => (
        <VisionMission key={i} {...props} />
      ))}
      <Objectives />
      <Methodology />
      <Impact />
      <SdgValueAhead />
      <ProjectTeam />
      <WhoWeAre />
    </div>
  );
}

export default About;
