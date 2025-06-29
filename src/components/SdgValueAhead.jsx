import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import methodology from "../assets/methodology.png";
import sdgImg from "../assets/sdg.jpg";
import stakeholderImg from "../assets/stakeholder.jpg";
import {CloudArrowUpIcon} from "@heroicons/react/24/outline";

const sdgvalueahead = [
  {
    name: "Aligned with the SDGs",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex w-full gap-4 flex-col">
            <div>
              SenseCode-AI contributes to key United Nations Sustainable
              Development Goals:
            </div>
            <div className=" border rounded p-4">
              <b>SDG 4: Quality Education</b> – Promoting inclusive, equitable
              learning opportunities.
            </div>
            <div className=" border rounded p-4">
              <b>SDG 5: Gender Equality</b> – Ensuring that girls with visual
              impairments are equally supported and represented in STEM.
            </div>
            <div className=" border rounded p-4">
              <b>SDG 10: Reduced Inequalities</b> – Bridging the digital divide
              for children with disabilities.
            </div>
          </div>
          <div className="flex w-full">
            <div className=" flex items-center justify-center text-center">
              <img
                id="img-width"
                className="rounded"
                style={{width: "100%", backgroundSize: "cover"}}
                src={sdgImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
  {
    name: "Our Values",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex w-full gap-4 flex-col">
            <div className=" border rounded p-4">
              <b>Inclusion:</b> Every child deserves the right to learn and
              explore.
            </div>
            <div className=" border rounded p-4">
              <b>Participation:</b> We co-design with, not just for, our
              learners.
            </div>
            <div className=" border rounded p-4">
              <b>Equity:</b> We aim to remove structural barriers to education.
            </div>
            <div className=" border rounded p-4">
              <b>Empowerment:</b> We help students discover their strengths and
              shape their futures.
            </div>
          </div>
          <div className="flex w-full">
            <div className=" flex items-center justify-center text-center">
              <img
                id="img-width"
                className="rounded"
                style={{width: "70%", backgroundSize: "cover"}}
                src={methodology}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
  {
    name: "Looking Ahead",
    description: (
      <>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex w-full gap-4 flex-col">
            <div>
              Beyond this 12-month collaboration, we are committed to sustaining
              and expanding our impact by:
            </div>
            <div className=" border rounded p-4">
              Publishing open-access research and design frameworks.
            </div>
            <div className=" border rounded p-4">
              Sharing our findings with educators, policymakers, and tech
              developers.
            </div>
            <div className=" border rounded p-4">
              Exploring further funding to adapt and scale our AI learning model
              globally.
            </div>
          </div>
          <div className="flex w-full">
            <div className=" flex items-center justify-center text-center">
              <img
                id="img-width"
                className="rounded"
                style={{width: "100%", backgroundSize: "cover"}}
                src={stakeholderImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    ),
    icon: CloudArrowUpIcon,
  },
];

export default function SdgValueAhead() {
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
            {/* <p className="mb-10 text-pretty text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl lg:text-balance">
              SDGs
            </p>*/}
            <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
              {sdgvalueahead.map((content, i) => (
                <div key={i} className="relative pl-0 sm:pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="hidden sm:flex absolute left-0 top-0 size-10 items-center justify-center rounded-lg bg-blue-800">
                      <content.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>

                    <p className="mb-10 text-pretty text-4xl font-semibold tracking-tight text-blue-950 lg:text-balance">
                      {content.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {content.description}
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
