import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import fungiImage from '../img/fungi.png';
import slide from '../img/slide.jpg';
import vol from '../img/vol.png';
import frame from '../img/frame.png';
import food from '../img/food.png';
import notepad from '../img/notepad.png';
import game from '../img/game.png';
import port from '../img/port.png';

const projectsData = [
  {
    id: 1,
    title: "Fungal Growth Analysis",
    description: "A 14-day image processing study analyzing black fungi (Hyphae Penta) on coconut flesh using OpenCV and Python.",
    tags: ["OpenCV", "Python", "Matplotlib", "ImageSegmentation"],
    imageUrl: fungiImage,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_fungalanalysis-imageprocessing-mycology-activity-7243471294531280896-GK-z",
    githubUrl: "https://github.com/shawmica/Image-Elites"
  },
  {
    id: 2,
    title: "Gesture-Controlled Slides",
    description: "Built a gesture-based slide tool using OpenCV and cvzone’s HandTrackingModule.",
    tags: ["OpenCV", "CvZone", "Python", "HandTrackingModule", "Mediapipe", "ComputerVision"],
    imageUrl: slide,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_computervision-opencv-gesturecontrol-activity-7215255849957490688-UhvG",
    githubUrl: "https://github.com/shawmica/Presentation_with_Gestures"
  },
  {
    id: 3,
    title: "Gesture Volume Control",
    description: "Developed a hand gesture-based volume system using OpenCV, Python, and Pycaw.",
    tags: ["OpenCV", "Python", "Pycaw", "MediaPipe", "NumPy"],
    imageUrl: vol,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/HandGesture"
  },
  {
    id: 4,
    title: "Frame Focus",
    description: "A dynamic photography portfolio with an interactive gallery and a contact form that lets visitors easily get in touch.",
    tags: ["HTML", "CSS", "Javascript", "React"],
    imageUrl: frame,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/photography_website"
  },
  {
    id: 5,
    title: "Recipe Management Web Application",
    description: "A full-stack recipe management app, users can browse, search, and filter recipes in real-time, while admins manage recipes through a secure panel.",
    tags: ["HTML", "CSS", "React", "Typescript", "Python", "Django"],
    imageUrl: food,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/chefs-corner"
  },
  {
    id: 6,
    title: "Python Notepad",
    description: "A fully functional text editor, featuring real-time spell checking with red underlines for typos and a clean, modern GUI.",
    tags: ["Python", "Tkinter", "OOP"],
    imageUrl: notepad,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-tkinter-gui-activity-7328444016029519872-0fGs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "https://github.com/shawmica/Text_Editor"
  },
  {
    id: 7,
    title: "Space Invaders Game",
    description: "A retro-style Space Invaders game built with Python and Pygame, featuring custom graphics, sound effects, player/enemy interactions, scoring, and game-over states. This project enhanced my OOP and event-driven programming skills.",
    tags: ["Python", "Pygame", "Pygame Mixer", "OOP"],
    imageUrl: game,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-gamedevelopment-pygame-activity-7329001571604746240-aved?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "https://github.com/shawmica/SpaceInvader_Game"
  },
  {
    id: 5,
    title: "My Personal Portfolio Website",
    description: "A clean, responsive portfolio website built with React.js, HTML, and CSS to showcase my work in AI, image processing, and frontend development.",
    tags: ["HTML", "CSS", "React", "JavaScript"],
    imageUrl: port,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/MyPortfolio"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover-scale overflow-hidden rounded-xl shadow-lg transition-transform duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md shadow-[0_0_4px_rgba(59,130,246,0.6)] border border-blue-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
