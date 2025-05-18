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
              I am a third-year IT undergraduate at Rajarata University of Sri Lanka, passionate about using technology to solve real-world problems. My interests include Software Engineering, Full-Stack Web Development, Cloud Computing, AI/ML, and Computer Vision.</p>
            <p>
              I have hands-on experience with Python, Java, C/C++, JavaScript, TypeScript, React, Shadcn UI, Bootstrap, HTML, CSS, Axios, Django, and Django REST Framework. I'm skilled in building secure, scalable applications using Microsoft Azure and JWT Authentication.

              In addition to technical skills, I bring strong problem-solving abilities, adaptability, teamwork, effective communication, and a continuous learning mindset.

            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: <Code className="h-10 w-10 mb-4 text-primary" />, title: "Frontend Development", delay: 0.2 },
              { icon: <Database className="h-10 w-10 mb-4 text-primary" />, title: "Backend Development", delay: 0.3 },
              { icon: <Layout className="h-10 w-10 mb-4 text-primary" />, title: " Artificial Intelligence, Machine Learning, Computer Vision",  delay: 0.4, colSpan: true },
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
