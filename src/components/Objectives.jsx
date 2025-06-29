import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import classImg from "../assets/class.webp";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "To design an instructional framework",
    description:
      "for AI programming that is tailored to the learning styles of blind and low vision students.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "To enhance and adapt a physical programming tool",
    description: "developed in our earlier project for AI education.",
    icon: LockClosedIcon,
  },
  {
    name: "To study and document students’ conceptual understanding",
    description:
      "understanding of AI, including key ideas like logic, pattern recognition, and decision making.",
    icon: ServerIcon,
  },
  {
    name: "To assess students' ability to engage productively with AI tasks,",
    description: "including tool usage and problem-solving.",
    icon: LockClosedIcon,
  },
  {
    name: "To explore students’ evolving perspectives",
    description:
      "on AI, self efficacy, and future learning or career aspirations.",
    icon: ServerIcon,
  },
];

export default function Fsection() {
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
    hidden: {opacity: 0, x: -100},
    visible: {
      opacity: 1,
      x: 0,
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
      <div className="overflow-hidden bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  Our Objectives
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  SenseCode-AI has five core objectives:
                </p>

                <dl className="mt-6 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 size-5 text-blue-800"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src={classImg}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 my-0 lg:my-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
