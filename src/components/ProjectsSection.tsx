import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import fungiImage from "../img/fungi.png";
import slide from "../img/slide.jpg";
import vol from "../img/vol.png";
import frame from "../img/frame.png";
import food from "../img/food.png";
import notepad from "../img/notepad.png";
import game from "../img/game.png";
import port from "../img/port.png";
import port2 from "../img/port2.png";
import ragAssistant from "../img/ragAssistant.png";
import gmailClassifier from "../img/gmailClassifier.png";
import aiStudyCompanion from "../img/aiStudyCompanion.png";
import gradePrediction from "../img/gradePrediction.png";
import chefBuddy from "../img/chefBuddy.png";
import mathly from "../img/mathly.png";

const projectsData = [
  {
    id: 1,
    title: "Real-Time AI Assistant using RAG",
    description: "Built an AI-powered document assistant that allows users to upload PDFs and interact with them through natural language conversations. The system uses RAG, semantic search, ChromaDB, and Groq LLM to generate context-aware responses in real time.",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit", "HuggingFace", "Groq", "RAG"],
    imageUrl: ragAssistant,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_ai-generativeai-rag-activity-7465684074708242432-c6j0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "https://github.com/shawmica/real-time-rag-ai-assistant"
  },
  {
    id: 2,
    title: "AI Study Companion",
    description: "Developed a full-stack AI learning platform that transforms PDFs, notes, and slides into summaries, quizzes, flashcards, and chatbot support. The system includes progress tracking, study analytics, and document-aware learning assistance.",
    tags: ["React", "TypeScript", "Node.js", "Express", "SQLite", "OpenAI", "Vite", "EdTech"],
    imageUrl: aiStudyCompanion,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_ai-edtech-fullstackdevelopment-activity-7393888726889906176-Te8f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
  },
  {
    id: 3,
    title: "AI-Powered Gmail Classifier",
    description: "Developed an intelligent Gmail automation system using Python, MCP, and Claude Desktop. The application reads emails securely through the Gmail API, detects spam or phishing, labels unread emails, and generates inbox summaries.",
    tags: ["Python", "MCP", "Claude Desktop", "Gmail API", "OAuth 2.0", "Google Cloud", "Automation", "AI"],
    imageUrl: gmailClassifier,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_ai-python-automation-activity-7464275168602001408-RvkJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "https://github.com/shawmica/gmail-classifier-mcp"
  },
  {
    id: 4,
    title: "Mathly - AI Math Solver",
    description: "Built an AI-powered math solver that reads printed equations using OCR, solves them with SymPy, and explains each step clearly. The system also provides voice explanations in English, Tamil, and Sinhala to support inclusive learning.",
    tags: ["Python", "OpenCV", "Tesseract OCR", "SymPy", "gTTS", "AI", "OCR", "EdTech"],
    imageUrl: mathly,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_ai-edtech-innovation-activity-7345658733571579904-mitY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
  },
  {
    id: 5,
    title: "Student Grade Prediction Model using ANN",
    description: "Led the development of an ANN model to predict student grades using study hours, attendance, quiz scores, engagement, and missed deadlines. The project involved data preprocessing, feature engineering, and hyperparameter optimization.",
    tags: ["Python", "ANN", "Machine Learning", "Data Preprocessing", "Feature Engineering", "TensorFlow", "Education Analytics", "AI"],
    imageUrl: gradePrediction,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_artificialintelligence-machinelearning-deeplearning-activity-7376839172378177537-ljWX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
  },
  {
    id: 6,
    title: "Chef Buddy - Android Meal Planning App",
    description: "Collaboratively developed an Android meal planning app that helps users search recipes, save favourites, and plan weekly meals. The app uses Java, MVP architecture, TheMealDB API, Room Database, and Retrofit.",
    tags: ["Java", "Android", "MVP Architecture", "Retrofit", "Room Database", "SQLite", "TheMealDB API", "Material Design"],
    imageUrl: chefBuddy,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_chef-buddy-android-app-chef-buddy-is-activity-7375157024428339200-uDRh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD4mIRgB1YfZferkQ68Aclke_nk76XKMsSA",
    githubUrl: "https://github.com/YOUR_USERNAME/Chef-Buddy"
  },
  {
    id: 7,
    title: "Fungal Growth Analysis",
    description: "Conducted a 14-day computer vision study to analyze black fungi growth on coconut flesh. Used OpenCV, image segmentation, and visualization techniques to track growth patterns from captured images.",
    tags: ["OpenCV", "Python", "Matplotlib", "Image Segmentation"],
    imageUrl: fungiImage,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_fungalanalysis-imageprocessing-mycology-activity-7243471294531280896-GK-z",
    githubUrl: "https://github.com/shawmica/Image-Elites"
  },
  {
    id: 8,
    title: "Gesture-Controlled Slides",
    description: "Developed a computer vision-based presentation controller that uses hand gestures for slide navigation. Integrated OpenCV, MediaPipe, and CvZone to create a touch-free presentation experience.",
    tags: ["OpenCV", "CvZone", "Python", "Hand Tracking", "MediaPipe", "Computer Vision"],
    imageUrl: slide,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_computervision-opencv-gesturecontrol-activity-7215255849957490688-UhvG",
    githubUrl: "https://github.com/shawmica/Presentation_with_Gestures"
  },
  {
    id: 9,
    title: "Gesture Volume Control",
    description: "Built a hand gesture recognition system that allows users to control system volume without physical interaction. Used OpenCV, MediaPipe, and Pycaw for real-time gesture tracking and audio control.",
    tags: ["OpenCV", "Python", "Pycaw", "MediaPipe", "NumPy"],
    imageUrl: vol,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/HandGesture"
  },
  {
    id: 10,
    title: "Recipe Management App",
    description: "Developed a full-stack recipe management platform that allows users to search, manage, and explore recipes efficiently. Built with React, TypeScript, Django, and database integration for dynamic content handling.",
    tags: ["HTML", "CSS", "React", "TypeScript", "Python", "Django"],
    imageUrl: food,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/chefs-corner"
  },
  {
    id: 11,
    title: "My Portfolio Website",
    description: "Designed and developed a modern personal portfolio website to showcase projects, skills, certifications, and professional activities. Built with React, TypeScript, Vite, Tailwind CSS, and Shadcn UI.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI"],
    imageUrl: port2,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/MyPortfolio"
  },
  {
    id: 12,
    title: "Frame Focus Photography",
    description: "Created a responsive photography portfolio platform with an interactive gallery, image showcase, and contact form. Focused on clean UI design, visual presentation, and user-friendly navigation.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: frame,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/photography_website"
  },
  {
    id: 13,
    title: "Python Notepad",
    description: "Built a desktop text editor application with file management features, spell-checking support, and a modern GUI. Designed using Python, Tkinter, and object-oriented programming principles.",
    tags: ["Python", "Tkinter", "OOP"],
    imageUrl: notepad,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-tkinter-gui-activity-7328444016029519872-0fGs",
    githubUrl: "https://github.com/shawmica/Text_Editor"
  },
  {
    id: 14,
    title: "Space Invaders Game",
    description: "Developed a retro-style arcade shooting game with player movement, enemy interactions, score tracking, collision detection, and sound effects. Implemented game mechanics using Python and Pygame.",
    tags: ["Python", "Pygame", "OOP"],
    imageUrl: game,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-gamedevelopment-pygame-activity-7329001571604746240-aved",
    githubUrl: "https://github.com/shawmica/SpaceInvader_Game"
  },
  {
    id: 15,
    title: "Classic Portfolio Website",
    description: "Created a responsive portfolio website to showcase personal projects, technical skills, and achievements. Developed using React, JavaScript, HTML, and CSS with a focus on clean and simple design.",
    tags: ["HTML", "CSS", "React", "JavaScript"],
    imageUrl: port,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/MyPortfolio"
  }
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white"
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
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md border border-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.6)]"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="text-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.3)] hover:shadow-[0_0_16px_rgba(59,130,246,0.6)]">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button variant="outline" size="sm" asChild className="text-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.3)] hover:shadow-[0_0_16px_rgba(59,130,246,0.6)]">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-blue-600 text-white hover:bg-blue-500 font-bold rounded-full px-10 py-3 text-lg transition-all duration-300 shadow-[0_0_16px_rgba(59,130,246,0.4)] hover:shadow-[0_0_28px_rgba(59,130,246,0.8)] border-2 border-blue-400 hover:border-blue-300"
          >
            {showAll ? "Show less" : "Read more"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;