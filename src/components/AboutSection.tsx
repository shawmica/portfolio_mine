import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Database } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm a full-stack developer with a passion for creating beautiful, functional web applications. 
              With over X years of experience, I've worked on projects from small websites to enterprise systems.
            </p>
            <p>
              My journey began in college and I’ve been solving problems and building products ever since.
            </p>
            <p>
              Outside of coding, I enjoy hiking, reading, and exploring new tech.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: <Code className="h-10 w-10 mb-4 text-primary" />, title: "Frontend Development", skills: "React, Next.js, TailwindCSS, TypeScript", delay: 0.2 },
              { icon: <Database className="h-10 w-10 mb-4 text-primary" />, title: "Backend Development", skills: "Node.js, Express, PostgreSQL, MongoDB", delay: 0.3 },
              { icon: <Layout className="h-10 w-10 mb-4 text-primary" />, title: "UI/UX Design", skills: "Figma, Adobe XD, User Testing, Accessibility", delay: 0.4, colSpan: true },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className={item.colSpan ? "sm:col-span-2" : ""}
              >
                <Card
                  className="relative z-10 rounded-2xl border border-white/20 shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.skills}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
