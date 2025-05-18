import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Flag } from "lucide-react";
import { motion } from "framer-motion";
import excert1 from '../img/excert1.jpg';
import excert2 from '../img/excert2.jpg';

const extracurricularData = [
  {
    id: 1,
    title: "Volunteer Web Developer",
    organization: "Local Community Center",
    period: "2022 - Present",
    icon: <Star className="h-10 w-10 text-primary/70" />,
    image: excert1,
    description: "Developing and maintaining websites for local non-profit organizations, providing free web services to community groups.",
  },
  {
    id: 2,
    title: "Tech Meetup Organizer",
    organization: "City Tech Enthusiasts",
    period: "2021 - Present",
    icon: <Trophy className="h-10 w-10 text-primary/70" />,
    image: excert2,
    description: "Organizing monthly technology meetups focusing on web development, bringing together professionals and enthusiasts.",
  },
  {
    id: 3,
    title: "Hackathon Participant",
    organization: "Various Tech Events",
    period: "2020 - Present",
    icon: <Flag className="h-10 w-10 text-primary/70" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    description: "Regular participant in both local and national hackathons, focusing on creating innovative solutions to real-world problems.",
  },
  {
    id: 4,
    title: "Certified Pianist",
    organization: "Trinity College London",
    period: "Completed 2021",
    icon: <Trophy className="h-10 w-10 text-primary/70" />,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Piano_keyboard.svg",
    description: "Achieved certification in Piano Practical and Theory examinations, demonstrating dedication to music and artistic expression.",
  },
];

const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Extracurricular Activities
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Community involvement and personal initiatives
        </motion.p>

        <motion.div
          className="grid gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {extracurricularData.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden rounded-2xl hover:shadow-lg border border-white/20 shadow-[0_0_15px_2px_rgba(59,130,246,0.3)] transition-all">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="p-4 rounded-xl bg-white/5 shadow-md transition-transform hover:scale-105">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-auto h-auto max-h-[250px] rounded-lg"
                    />
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {activity.icon}
                          <div>
                            <h3 className="text-xl font-medium">{activity.title}</h3>
                            <p className="text-sm text-muted-foreground">{activity.organization}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {activity.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;
