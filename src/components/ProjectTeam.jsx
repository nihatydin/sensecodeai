import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";
import pp4 from "../assets/pp4.png";
import pp5 from "../assets/pp5.png";
import pp6 from "../assets/pp6.jpeg";

const content = {
  title: "Meet Our Project Team",
  text: "We’re a dynamic group of researchers who are passionate about creating innovative solutions to teach computer science to special group of users, children with visual impairment.",
};

const teamMembers = [
  {
    name: "Prof. Dr.Serhat Bahadır Kert",
    role: "Co-Lead / Yildiz Technical University",
    image: pp1,
  },
  {
    name: "Prof. Dr. Janet C. Read",
    role: "Co-Lead / University of Lancashire",
    image: pp2,
  },
  {
    name: "Assist. Prof. Dr. Mehmet Fatih Erkoç",
    role: "Researcher / Yildiz Technical University",
    image: pp3,
  },
  {
    name: "Dr. Tuba Uğraş",
    role: "Researcher / Yildiz Technical University",
    image: pp4,
  },
  {
    name: "Assist. Prof. Dr. Feridun C. Özçakır",
    role: "Researcher / İstanbul Gedik University ",
    image: pp5,
  },
  {
    name: "Prof. Dr. A. Tuğba Tuncer",
    role: "Researcher / Fatih Sultan Mehmet Foundation University",
    image: pp6,
  },
];

export default function ProjectTeam() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0, // Görünürlük yüzdesi
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {opacity: 0, y: 100},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5},
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      <div className="bg-white pt-0 py-12 sm:pb-28 sm:pt-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-20 px-6 lg:px-20 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 text-justify">
              {content.text}
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teamMembers.map((member) => (
              <li key={member.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={member.image}
                    className="size-16 lg:size-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-blue-800">
                      {member.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
