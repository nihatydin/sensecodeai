import React, {useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import classImg from "../assets/class.webp";
import student3 from "../assets/student3.jpg";

export default function BentoGrid() {
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

  const firstCode = useRef();
  const secondCode = useRef();
  const [selectTitleOne, setSelectTitleOne] = useState(true);
  const [selectTitleTwo, setSelectTitleTwo] = useState(false);
  const onFirstCodeTitle = () => {
    firstCode.current.style.display = "block";
    secondCode.current.style.display = "none";
    setSelectTitleOne(true);
    setSelectTitleTwo(false);
  };
  const onSecondCodeTitle = () => {
    firstCode.current.style.display = "none";
    secondCode.current.style.display = "block";
    setSelectTitleOne(false);
    setSelectTitleTwo(true);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      <div className="bg-gray-50 py-12 pb-24 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-20 ">
          <div className="flex flex-col lg:flex-row gap-0 sm:gap-12 items-center justify-between">
            <div className="w-full">
              <p className="mt-2 max-w-lg text-balance text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl">
                Why SenseCode AI Matters
              </p>
            </div>
            <div className="w-full">
              <p className="mt-6 sm:mt-2 text-lg/8 text-gray-600">
                Despite advances in education technology, children with visual
                impairments still face limited access to engaging, hands-on
                learning opportunities in computer science and AI. This digital
                divide risks excluding them from future careers and innovation
                ecosystems. <br />
                SenseCode-AI addresses this critical gap by:
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <b className="text-black">Designing AI teaching methods</b>{" "}
                    tailored to tactile, auditory, and multimodal learning.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src={classImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <b className="text-black">
                      Co-developing educational materials
                    </b>{" "}
                    and tools with learners and educators.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs rounded-xl"
                    src={student3}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <b className="text-black">
                      Running workshops and pilot programs
                    </b>{" "}
                    that foster both cognitive and emotional development in
                    students.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs rounded-xl"
                    src={student3}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <b className="text-black">In doing so</b>, we actively work
                    toward a more inclusive future where disability is not a
                    barrier to digital literacy or creativity.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div
                          className={`cursor-pointer border-r px-4 py-2 ${
                            selectTitleOne
                              ? "border-b border-b-white/20 border-r-white/10 bg-white/5 text-white"
                              : "border-gray-600/10"
                          } `}
                          onClick={onFirstCodeTitle}
                        >
                          NotificationSetting.jsx
                        </div>
                        <div
                          className={`cursor-pointer border-r px-4 py-2 ${
                            selectTitleTwo
                              ? "border-b border-b-white/20 border-r-white/10 bg-white/5 text-white"
                              : "border-gray-600/10"
                          } `}
                          onClick={onSecondCodeTitle}
                        >
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div
                      className="block px-6 pb-14 pt-6 text-gray-400"
                      ref={firstCode}
                    >
                      <pre>
                        <code>
                          {`
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
                            `}
                        </code>
                      </pre>
                    </div>
                    <div
                      className="hidden px-6 pb-14 pt-6 text-gray-400"
                      ref={secondCode}
                    >
                      <pre>
                        <code>
                          {`
   if (inView) {
    controls.start("visible");

  } else {
    controls.start("hidden");
  
  }
  `}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
