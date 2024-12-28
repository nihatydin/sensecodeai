import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Feature() {
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
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="max-w-8xl lg:px-32 flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="w-full">
              <h2 className="text-base/7 font-semibold text-blue-800">
                Deploy faster
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl lg:text-balance">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="w-full">
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                optio doloribus enim omnis, libero tempora ipsum repellat harum
                vitae officiis doloremque perspiciatis illo nobis cupiditate
                quisquam labore id sint odio.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
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
