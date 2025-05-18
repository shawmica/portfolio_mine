import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cert1 from '../img/cert1.png';
import cert2 from '../img/cert2.png';
import cert3 from '../img/cert3.png';
import cert4 from '../img/cert4.png';
import cert5 from '../img/cert5.png';
import cert6 from '../img/cert6.png';
import cert7 from '../img/cert7.png';
import cert8 from '../img/cert8.png';
import cert9 from '../img/cert9.png';
import cert10 from '../img/cert10.png';
import cert11 from '../img/cert11.png';
import cert12 from '../img/cert12.png';
import cert13 from '../img/cert13.png';
import cert14 from '../img/cert14.png';
import cert15 from '../img/cert15.png';
import cert16 from '../img/cert16.png';
import cert17 from '../img/cert17.png';
import cert18 from '../img/cert18.png';
import cert19 from '../img/cert19.png';

import { Button } from "@/components/ui/button";

const certificationsData = [
  { id: 1, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert1, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 2, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert2, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 3, name: "Full Stack Web Development", issuer: "Udacity", date: "October 2022", image: cert3, description: "Comprehensive training in modern web development technologies and practices." },
  { id: 4, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert4, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 5, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert5, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 6, name: "Full Stack Web Development", issuer: "Udacity", date: "October 2022", image: cert6, description: "Comprehensive training in modern web development technologies and practices." },
  { id: 7, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert7, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 8, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert8, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 9, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert9, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 10, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert10, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 11, name: "Full Stack Web Development", issuer: "Udacity", date: "October 2022", image: cert11, description: "Comprehensive training in modern web development technologies and practices." },
  { id: 12, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert12, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 13, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert13, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 14, name: "Full Stack Web Development", issuer: "Udacity", date: "October 2022", image: cert14, description: "Comprehensive training in modern web development technologies and practices." },
  { id: 15, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert15, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 16, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert16, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 17, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2023", image: cert17, description: "Foundational certification validating cloud fluency and AWS knowledge." },
  { id: 18, name: "Professional Scrum Master I", issuer: "Scrum.org", date: "January 2023", image: cert18, description: "Certification for understanding and applying Scrum framework and practices." },
  { id: 19, name: "Full Stack Web Development", issuer: "Udacity", date: "October 2022", image: cert19, description: "Comprehensive training in modern web development technologies and practices." },

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
            <Card key={certification.id} className="overflow-hidden hover-scale">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={certification.image} 
                  alt={certification.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{certification.date}</p>
                </div>
                <h3 className="text-xl font-medium mb-1">{certification.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Issued by {certification.issuer}</p>
                <p className="text-sm">{certification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {certificationsData.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
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
