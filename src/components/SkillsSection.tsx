import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import restapi from "../img/restapi.jpeg"

interface Technology {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "design" | "other" | "language";
}

const technologies: Technology[] = [
  // Frontend
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },

  // Backend
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "backend" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "backend" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "backend" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "REST API", icon: restapi, category: "backend" },

  // API & Testing
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "other" },

  // DevOps & Cloud
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "other" },

  // UI/UX Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "design" },

  // Tools & Version Control
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "other" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "other" },
  { name: "Qt Creator", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg", category: "other" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "other" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", category: "other" },
  { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg", category: "other" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", category: "other" },

  // Languages
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "language" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "language" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "language" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "language" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "language" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "language" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "language" },
];

// Category labels
const categoryLabels: Record<Technology["category"], string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  design: "UI/UX Design",
  other: "DevOps & Tools",
  language: "Languages",
};

// Deduplication function to filter unique names
const getUniqueTechnologies = (techs: Technology[]) => {
  const seen = new Set();
  return techs.filter((tech) => {
    if (seen.has(tech.name)) {
      return false;
    }
    seen.add(tech.name);
    return true;
  });
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | Technology["category"]>("all");

  const filteredTechnologies = getUniqueTechnologies(
    selectedCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory)
  );

  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer text-sm px-4 py-2 transition-all hover-scale ${selectedCategory === "all" ? "bg-primary" : "bg-secondary"}`}
          >
            All
          </Badge>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Badge
              key={key}
              onClick={() => setSelectedCategory(key as Technology["category"])}
              className={`cursor-pointer text-sm px-4 py-2 transition-all hover-scale ${selectedCategory === key ? "bg-primary" : "bg-secondary"}`}
            >
              {label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <AnimatePresence>
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden transform transition-all duration-500 hover:shadow-lg border border-white/20 shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] rounded-2xl">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full mb-4 shadow-md">
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="font-medium text-lg">{tech.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
