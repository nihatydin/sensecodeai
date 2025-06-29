import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {CloudArrowUpIcon} from "@heroicons/react/24/outline";
import ImpactImg from "../assets/impact.jpg";

const impact = [
  {
    name: "Immediate Outcomes",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="h-fit border rounded p-4">
              Enhanced confidence, motivation, and computational thinking in
              visually impaired children.
            </div>
            <div className="h-fit border rounded p-4">
              Tangible AI learning tools and a specialized instructional guide
              for inclusive education.
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
  {
    name: "Medium-Term Outcomes",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="h-fit border rounded p-4">
              Adoption of inclusive ICT practices in Turkish classrooms.
            </div>
            <div className="h-fit border rounded p-4">
              New pathways for visually impaired students to engage in
              technology and STEM.
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
  {
    name: "Long-Term Vision",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="h-fit border rounded p-4">
              Visually impaired youth equipped to pursue careers in AI, data
              science, and digital innovation.
            </div>
            <div className="h-fit border rounded p-4">
              Global inspiration for inclusive design in education technology.
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
];

export default function Impact() {
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
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-6xl">
            <p className="mb-10 text-pretty text-4xl font-semibold tracking-tight text-blue-950 lg:text-balance">
              Our Impact
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                {impact.map((content, i) => (
                  <div key={i} className="relative">
                    <dt className="flex items-center gap-2 text-base/7 font-semibold text-gray-900">
                      <div className=" left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-800">
                        <content.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      {content.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {content.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div>
                <img src={ImpactImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
