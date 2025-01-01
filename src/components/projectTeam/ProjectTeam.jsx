import React from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const people = [
  {
    name: "Serhat Bahadır Kert",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/1.PNG",
  },
  {
    name: "Janet C. Read",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/2.PNG",
  },
  {
    name: "Mehmet Fatih Erkoç",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/3.PNG",
  },
  {
    name: "Tuba Uğraş",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/6.PNG",
  },
  {
    name: "Mehmet Fatih Erkoçç",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/3.PNG",
  },
  {
    name: "Tuba Uğraşş",
    role: "Co-Founder / CEO",
    imageUrl: "https://sensecode.yildiz.edu.tr/assets/images/User/6.PNG",
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
      <div className="bg-white pt-6 py-12 sm:pb-28 sm:pt-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-20 px-6 lg:px-20 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
              Meet Our Project Team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-blue-800">
                      {person.role}
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
