import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
const text = [
  {
    name: (
      <>
        Yıldız Technical University (Türkiye) &rarr; with deep expertise in
        instructional technology, curriculum design, and education for children
        with disabilities.
      </>
    ),
  },
  {
    name: (
      <>
        University of Central Lancashire (UK) &rarr; a leading institution in
        child-computer interaction, human-centered design, and digital
        inclusion.
      </>
    ),
  },
];
/* const stats = [
//  {name: "Offices worldwide", value: "12"},
//  {name: "Full-time colleagues", value: "300+"},
//  {name: "Hours per week", value: "40"},
//  {name: "Paid time off", value: "Unlimited"},
]; */

export default function Section() {
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
      <div
        style={{backgroundColor: "rgb(0, 0, 90)"}}
        className="relative isolate overflow-hidden py-16 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Who we are?
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8 ">
              The project builds upon a successful prior collaboration supported
              by the Newton Fund, where we developed a tactile programming tool
              for blind and low-vision students. SenseCode-AI extends that work
              into the realm of artificial intelligence, creating learning
              environments that are interactive, accessible, and inspiring.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="gap-x-8 gap-y-6 text-base/7 font-semibold text-white md:flex lg:gap-x-10 mb-4 ">
              SenseCode-AI is led by a multidisciplinary team of researchers and
              educators from:
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-300 sm:grid-cols-2 md:flex lg:gap-x-10">
              {text.map((txt, i) => (
                <div key={i}>
                  <span aria-hidden="true"></span> {txt.name}
                </div>
              ))}
            </div>
            {/*  <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
