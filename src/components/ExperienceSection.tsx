import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import ieee from "../img/ieee.jpeg";
import wie from "../img/wie.jpeg";
import rjt from "../img/ieeerjt.jpeg";
import cs from "../img/cs.jpeg";

// Experience data with logos
const experienceData = [
  {
    id: 1,
    company: "IEEE Student Branch of RUSL",
    position: "Publicity Team Member",
    duration: "Nov 2023 - Feb 2025 • 1 yr 4 mos",
    logo: rjt,
  },
  {
    id: 2,
    company: "IEEE Computer Society",
    position: "Student Member",
    duration: "Jun 2024 - Present • 1 yr",
    logo: cs,
  },
  {
    id: 3,
    company: "IEEE",
    position: "Student Member",
    duration: "Jun 2024 - Present • 1 yr",
    logo: ieee,
  },
  {
    id: 4,
    company: "IEEE Women in Engineering",
    position: "Student Member",
    duration: "Jul 2024 - Present • 11 mos",
    logo: wie,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Volunteering
        </motion.h2>

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden rounded-2xl border border-white/20 transition-transform duration-300 hover:scale-[1.01] hover:border-transparent hover:ring-2 hover:ring-blue-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 hover:opacity-20 transition-opacity duration-300"></div>

                <CardHeader className="flex flex-row items-center space-x-4 relative z-10">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-16 h-16 object-contain rounded-md border"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {item.position}
                    </CardTitle>
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      <span className="font-medium">{item.company}</span> •{" "}
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
