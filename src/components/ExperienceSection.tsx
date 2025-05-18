import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Megaphone, Laptop, Network, Users } from "lucide-react";

const experienceData = [
  {
    id: 1,
    company: "IEEE Student Branch of RUSL",
    position: "Publicity Team Member",
    duration: "Nov 2023 - Feb 2025 • 1 yr 4 mos",
    description: "Supporting event promotions, communications, and visibility efforts for IEEE student activities at RUSL.",
    icon: <Megaphone className="h-5 w-5 text-primary" />,
  },
  {
    id: 2,
    company: "IEEE Computer Society",
    position: "Student Member",
    duration: "Jun 2024 - Present • 1 yr",
    description: "Active member participating in technical communities, webinars, and networking activities related to computer science and engineering.",
    icon: <Laptop className="h-5 w-5 text-primary" />,
  },
  {
    id: 3,
    company: "IEEE",
    position: "Student Member",
    duration: "Jun 2024 - Present • 1 yr",
    description: "Engaged in IEEE events, workshops, and volunteering activities to promote technological advancements and student engagement.",
    icon: <Network className="h-5 w-5 text-primary" />,
  },
  {
    id: 4,
    company: "IEEE Women in Engineering",
    position: "Student Member",
    duration: "Jul 2024 - Present • 11 mos",
    description: "Supporting initiatives that inspire, engage, and empower women in engineering and technology.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
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
              <Card className="relative overflow-hidden rounded-2xl border border-white/20 transition-transform duration-300 hover:scale-[1.02] hover:border-transparent hover:ring-2 hover:ring-blue-500 hover:shadow-[0_0_30px_5px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 hover:opacity-20 transition-opacity duration-300"></div>

                <CardHeader className="flex flex-row items-start space-x-4 pb-2 relative z-10">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{item.position}</CardTitle>
                    <div className="text-muted-foreground">
                      <span className="font-medium">{item.company}</span> • <span>{item.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
