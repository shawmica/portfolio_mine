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
import port2 from '../img/port2.png';
import ragAssistant from '../img/ragAssistant.png';
import gmailClassifier from '../img/gmailClassifier.png';
import aiStudyCompanion from '../img/aiStudyCompanion.png';
import gradePrediction from '../img/gradePrediction.png';
import chefBuddy from '../img/chefBuddy.png';
import mathly from '../img/mathly.png';

const projectsData = [
  {
  id: 1,
  title: "Real-Time AI Assistant using RAG",
  description: "Built an AI-powered document assistant that enables users to upload PDFs and interact with them through natural language conversations using Retrieval-Augmented Generation (RAG). The system leverages semantic search, vector embeddings, ChromaDB, and Groq LLM to generate accurate context-aware responses in real time.",
  tags: [
    "Python",
    "LangChain",
    "ChromaDB",
    "FastAPI",
    "Streamlit",
    "HuggingFace",
    "Groq",
    "RAG",
    "LLM"
  ],
  imageUrl: ragAssistant,
  demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_built-a-real-time-ai-assistant-using-rag-activity-#########",
  githubUrl: "https://github.com/shawmica/real-time-rag-ai-assistant"
  },
  {
  id: 13,
  title: "Student Grade Prediction Model using ANN",
  description: "Developed an Artificial Neural Network (ANN) model to predict student academic performance based on study behavior, attendance, quiz results, engagement, and assignment completion. The system performs feature engineering and machine learning-based classification to predict final grades (A, B, C, or F), supporting data-driven educational insights.",
  tags: [
    "Python",
    "Artificial Neural Networks",
    "Machine Learning",
    "Data Preprocessing",
    "Feature Engineering",
    "TensorFlow",
    "Education Analytics",
    "AI"
  ],
  imageUrl: gradePrediction,
  demoUrl: "YOUR_LINKEDIN_POST_URL",
  githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
  },
  {
  id: 11,
  title: "AI-Powered Gmail Classifier",
  description: "Developed an intelligent Gmail automation system using Python, MCP (Model Context Protocol), and Claude Desktop. The application securely reads emails through the Gmail API, classifies messages into categories, detects potential phishing and spam emails, automatically labels unread emails, and generates intelligent inbox summaries to improve email management and productivity.",
  tags: [
    "Python",
    "MCP",
    "Claude Desktop",
    "Gmail API",
    "OAuth 2.0",
    "Google Cloud",
    "Automation",
    "AI"
  ],
  imageUrl: gmailClassifier,
  demoUrl: "YOUR_LINKEDIN_POST_URL",
  githubUrl: "https://github.com/shawmica/gmail-classifier-mcp"
  },
  {
    id: 2,
    title: "Fungal Growth Analysis",
    description: "A 14-day image processing study analyzing black fungi (Hyphae Penta) on coconut flesh using OpenCV and Python.",
    tags: ["OpenCV", "Python", "Matplotlib", "ImageSegmentation"],
    imageUrl: fungiImage,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_fungalanalysis-imageprocessing-mycology-activity-7243471294531280896-GK-z",
    githubUrl: "https://github.com/shawmica/Image-Elites"
  },
  {
    id: 3,
    title: "Gesture-Controlled Slides",
    description: "Built a gesture-based slide tool using OpenCV and cvzone’s HandTrackingModule.",
    tags: ["OpenCV", "CvZone", "Python", "HandTrackingModule", "Mediapipe", "ComputerVision"],
    imageUrl: slide,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_computervision-opencv-gesturecontrol-activity-7215255849957490688-UhvG",
    githubUrl: "https://github.com/shawmica/Presentation_with_Gestures"
  },
  {
  id: 15,
  title: "Mathly - AI Math Solver with Voice Explanations",
  description: "Developed an AI-powered math solver that reads printed equations using OpenCV and Tesseract OCR, detects variables, solves problems with SymPy, and explains each step clearly through voice explanations in English, Tamil, and Sinhala. The project focuses on making math learning more accessible through AI, OCR, symbolic computation, and multilingual speech support.",
  tags: [
    "Python",
    "OpenCV",
    "Tesseract OCR",
    "SymPy",
    "gTTS",
    "AI",
    "OCR",
    "EdTech"
  ],
  imageUrl: mathly,
  demoUrl: "YOUR_LINKEDIN_POST_URL",
  githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
},
  {
    id: 4,
    title: "My Portfolio Website",
    description: "Dynamic personal portfolio to showcase my skills, projects, certifications, and professional activities.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI"],
    imageUrl: port2,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/MyPortfolio"
  },
  {
    id: 4,
    title: "Gesture Volume Control",
    description: "Hand gesture-based volume control system using OpenCV, Python, and Pycaw.",
    tags: ["OpenCV", "Python", "Pycaw", "MediaPipe", "NumPy"],
    imageUrl: vol,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/HandGesture"
  },
  {
  id: 12,
  title: "AI Study Companion",
  description: "Developed a full-stack AI-powered learning platform that transforms PDFs, notes, and study materials into interactive learning experiences. The system generates AI-powered summaries, quizzes, flashcards, and personalized study assistance while tracking student progress and performance through analytics.",
  tags: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "SQLite",
    "OpenAI",
    "Vite",
    "AI",
    "EdTech",
    "Full Stack"
  ],
  imageUrl: aiStudyCompanion,
  demoUrl: "YOUR_LINKEDIN_POST_URL",
  githubUrl: "YOUR_GITHUB_REPOSITORY_URL"
  },
  {
  id: 14,
  title: "Chef Buddy - Android Meal Planning App",
  description: "Developed a feature-rich Android application that helps users discover recipes, save favorites, and organize weekly meal plans. Built using Java and MVP architecture, the app integrates with TheMealDB API to provide recipe recommendations, ingredient-based search, meal scheduling, and detailed cooking instructions for a seamless meal-planning experience.",
  tags: [
    "Java",
    "Android",
    "MVP Architecture",
    "Retrofit",
    "Room Database",
    "SQLite",
    "TheMealDB API",
    "Material Design"
  ],
  imageUrl: chefBuddy,
  demoUrl: "YOUR_LINKEDIN_POST_URL",
  githubUrl: "https://github.com/YOUR_USERNAME/Chef-Buddy"
  },
  {
    id: 5,
    title: "Frame Focus Photography",
    description: "A dynamic photography portfolio with an interactive gallery and contact form.",
    tags: ["HTML", "CSS", "Javascript", "React"],
    imageUrl: frame,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-opencv-computervision-activity-7207244949321310209-9vFs",
    githubUrl: "https://github.com/shawmica/photography_website"
  },
  {
    id: 6,
    title: "Recipe Management App",
    description: "A full-stack recipe app with real-time search and admin management panel.",
    tags: ["HTML", "CSS", "React", "Typescript", "Python", "Django"],
    imageUrl: food,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_reactjs-typescript-django-activity-7327213614342328320-vmXh",
    githubUrl: "https://github.com/shawmica/chefs-corner"
  },
  {
    id: 7,
    title: "Python Notepad",
    description: "A functional text editor with spell checking and modern GUI.",
    tags: ["Python", "Tkinter", "OOP"],
    imageUrl: notepad,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-tkinter-gui-activity-7328444016029519872-0fGs",
    githubUrl: "https://github.com/shawmica/Text_Editor"
  },
  {
    id: 8,
    title: "Space Invaders Game",
    description: "A retro-style game with player/enemy interactions, scoring, and sound effects.",
    tags: ["Python", "Pygame", "OOP"],
    imageUrl: game,
    demoUrl: "https://www.linkedin.com/posts/shawmica-sivatharan_python-gamedevelopment-pygame-activity-7329001571604746240-aved",
    githubUrl: "https://github.com/shawmica/SpaceInvader_Game"
  },
  {
    id: 9,
    title: "Classic Portfolio Website",
    description: "A responsive portfolio website built with React.js, HTML, and CSS.",
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
          {projectsData.map((project) => (
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
                      {project.tags.map(tag => (
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
