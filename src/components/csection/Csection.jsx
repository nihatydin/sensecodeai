import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
export default function Csection() {
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
    hidden: {opacity: 0, y: 200},
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
        <div className=" mx-auto max-w-7xl py-12 sm:px-0 sm:py-32 lg:px-0">
          <div className="relative isolate overflow-hidden bg-white px-6 sm:rounded-3xl sm:px-8 md:pt-24 lg:flex justify-between lg:gap-x-20 lg:px-8 lg:pt-0">
            <div className=" mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
                Boost your productivity. Start using our app today.
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-900">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-black">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              // src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              src="../vite.svg"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div> */}
            <div className=" flex items-center justify-end max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
              <img
                className="rounded"
                style={{width: "100%", backgroundSize: "cover"}}
                src="..//class.webp"
                alt=""
              />
            </div>
            {/* <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Facere veritatis autem sed
              exercitationem explicabo earum dolores vitae odit necessitatibus,
              id, labore minus laboriosam quasi error quidem ad tenetur aliquam
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus non odit omnis qui vitae delectus modi labore iste alias
              voluptatibus. Magni, perferendis aliquid autem distinctio repellat
              reiciendis iure minima laudantium.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
