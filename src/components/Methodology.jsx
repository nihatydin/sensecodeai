import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import methodology from "../assets/methodology.png";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Analysis",
    description:
      "Interviews with teachers and students to assess needs and expectations.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Design",
    description:
      "Development of accessible AI content, tools, and evaluation instruments.",
    icon: LockClosedIcon,
  },
  {
    name: "Development",
    description:
      "Refinement and prototyping of teaching materials and the physical coding tool.",
    icon: ArrowPathIcon,
  },
  {
    name: "Implementation",
    description:
      "A 15-hour AI training program delivered to students from earthquake-affected regions of Türkiye.",
    icon: FingerPrintIcon,
  },
  {
    name: "Evaluaiton",
    description:
      "Structured feedback from children, educators, and subject-matter experts to assess usability and impact.",
    icon: FingerPrintIcon,
  },
];

export default function Methodology() {
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
          <div className="max-w-8xl flex flex-col lg:flex-row gap-0 md:gap-12 items-center justify-between">
            <div className="w-full">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-950 lg:text-balance">
                Our Methodology
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Our approach follows a design-based research (DBR) model that is
                iterative, inclusive, and grounded in real-world classroom
                practices. <br /> <br /> <b>Project Phases Include:</b>
              </p>
            </div>
            <div className="w-full">
              <div className=" flex items-center justify-center max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
                <img
                  id="img-width"
                  className="rounded"
                  style={{width: "65%", backgroundSize: "cover"}}
                  src={methodology}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-800">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
