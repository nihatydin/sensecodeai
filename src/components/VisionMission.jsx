import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function VisionMission({title, content, img, rowReverse}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Görünürlük yüzdesi
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {opacity: 0, y: 50},
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
      <div className="">
        <div className=" mx-auto max-w-7xl pb-24 sm:px-0 sm:my-12 sm:pb-8 lg:px-12">
          <div
            className={`relative isolate overflow-hidden bg-white px-6 sm:rounded-3xl sm:px-8 md:pt-24 flex flex-col ${
              rowReverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12 justify-between lg:gap-x-20 lg:px-8 lg:pt-0`}
          >
            <div className=" mx-auto max-w-lg lg:mx-0 lg:flex-auto lg:py-12 text-justify">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-900">
                {content}
              </p>
            </div>
            <div className=" flex items-center justify-end max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
              <img
                className="rounded"
                style={{width: "100%", backgroundSize: "cover"}}
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
