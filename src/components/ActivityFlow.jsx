import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {motion} from "framer-motion";
import {
  FaFlagCheckered,
  FaTools,
  FaMoneyCheckAlt,
  FaRocket,
} from "react-icons/fa";

const events = [
  {
    date: "2020",
    title: "Projeye Başlangıç",
    description:
      "Proje planlaması ve başlangıç toplantıları yapıldı. lorem ipsum dolor sit",
    icon: <FaFlagCheckered size={34} className="p-2" />,
  },
  {
    date: "2021",
    title: "İlk Prototip",
    description: "İlk ürün prototipi geliştirildi ve test edildi.",
    icon: <FaTools size={34} className="p-2" />,
  },
  {
    date: "2022",
    title: "Yatırım Alındı",
    description: "Proje için yatırım alındı ve ekip genişletildi.",
    icon: <FaMoneyCheckAlt size={34} className="p-2" />,
  },
  {
    date: "2023",
    title: "Ürün Lansmanı",
    description: "Ürün resmi olarak piyasaya sürüldü.",
    icon: <FaRocket size={34} className="p-2" />,
  },
];

const TimelineComponent = () => {
  return (
    <div className="py-16 sm:py-28">
      <Timeline position={"alternate"}>
        <div className="text-center text-xl font-bold mb-16">Activity Flow</div>
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                style={{color: "white", backgroundColor: "darkblue"}}
              >
                {event.icon}
              </TimelineDot>
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 50}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
                className="relative"
              >
                <div className="border rounded p-2 sm:p-8 mb-2 shadow-lg bg-white ">
                  {/* <div className="text-blue-500">{event.icon}</div> */}
                  <div className="space-y-1 text-sm sm:text-base">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="">{event.description}</p>
                    <p className="text-gray-500">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
