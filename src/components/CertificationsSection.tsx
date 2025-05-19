import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import cert1 from '../img/cert1.png';
import cert2 from '../img/cert2.png';
import cert3 from '../img/cert3.png';
import cert4 from '../img/cert4.png';
import cert5 from '../img/cert5.png';
import cert6 from '../img/cert6.png';
import cert8 from '../img/cert8.png';
import cert9 from '../img/cert9.png';
import cert10 from '../img/cert10.png';
import cert11 from '../img/cert11.png';
import cert12 from '../img/cert12.png';
import cert14 from '../img/cert14.png';
import cert15 from '../img/cert15.png';
import cert16 from '../img/cert16.png';
import cert17 from '../img/cert17.png';
import cert18 from '../img/cert18.png';
import cert19 from '../img/cert19.png';
import cert20 from '../img/cert20.png';
import cert21 from '../img/cert21.jpg';

const certificationsData = [
  { id: 1, name: "Agile Project Management in ICT Projects", issuer: "University of Moratuwa", date: "April 2025", image: cert1 },
  { id: 2, name: "MoraXtreme 9.0 Certificate of Participation", issuer: "University of Moratuwa", date: "October 2024", image: cert2 },
  { id: 3, name: "Python Programming", issuer: "University of Moratuwa", image: cert3 },
  { id: 4, name: "Web Design for Beginners", issuer: "University of Moratuwa", image: cert4 },
  { id: 5, name: "Figma Certification of Completion", issuer: "Marazin Academy", date: "October 2024", image: cert5 },
  { id: 6, name: "Xtreme Encode", issuer: "ENCIDE MACE, IEEEXTREME 18.0 Region 10", date: "October 2024", image: cert6 },
  { id: 8, name: "IEEEXtreme 18.0 Programming Competition", issuer: "IEEE", date: "October 2024", image: cert8 },
  { id: 9, name: "Ethics Champion", issuer: "IEEE", date: "August 2024", image: cert9 },
  { id: 10, name: "Front-End Web Development", issuer: "University of Moratuwa", date: "2024", image: cert10 },
  { id: 11, name: "Python for Beginners", issuer: "University of Moratuwa", date: "2022", image: cert11 },
  { id: 12, name: "Foundations of Project Management", issuer: "University of Moratuwa", date: "2024", image: cert12 },
  { id: 14, name: "Introduction to Microsoft Azure", issuer: "Microsoft Learn Student Ambassador", image: cert14 },
  { id: 15, name: "Problem Solving (Basic)", issuer: "HackerRank", date: "2024", image: cert15 },
  { id: 16, name: "IEEE R10 ERM Student Contest", issuer: "IEEE", date: "January 2023", image: cert16 },
  { id: 17, name: "Python Django 101", issuer: "Simplilearn", date: "May 2025", image: cert17 },
  { id: 18, name: "API Beginner Learning Path", issuer: "Postman Academy", date: "May 2025", image: cert18 },
  { id: 19, name: "API Testing Path", issuer: "Postman Academy", date: "May 2025", image: cert19 },
  { id: 20, name: "RUSLXtreme 1.0 Mini Hackathon", issuer: "Rajarata University of Sri Lanka IEEE Student Branch", date: "October 2024", image: cert20 },
  { id: 21, name: "BITCODE V5.0 Preselection Round", issuer: "Rajarata University of Sri Lanka", date: "November 2024", image: cert21 },
];

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificationsData : certificationsData.slice(0, 6);

  return (
    <section id="certifications" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Certifications</h2>
        <p className="text-muted-foreground mb-8">Professional qualifications and achievements</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {visibleCertificates.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <motion.img 
                    src={certification.image} 
                    alt={certification.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">{certification.date}</p>
                  </div>
                  <h3 className="text-xl font-medium mb-1">{certification.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Issued by {certification.issuer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {certificationsData.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border border-blue-500 hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.7)] focus:shadow-[0_0_15px_2px_rgba(59,130,246,0.7)] transition-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Read More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
