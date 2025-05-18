import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Flag } from "lucide-react";
import { motion } from "framer-motion";
import excert1 from '../img/excert1.jpg';
import excert2 from '../img/excert2.jpg';

const extracurricularData = [
  {
    id: 1,
    title: "Grade 3 Music Theory",
    organization: "The Associated Board of the Royal Schools of Music",
    period: "2015",
    icon: <Star className="h-10 w-10 text-primary/70" />,
    image: excert1,
    description: "Recognized for academic achievement in Grade 3 Music Theory under the Associated Board of the Royal Schools of Music (ABRSM). Demonstrated strong proficiency in reading and interpreting music notation, understanding rhythmic structures, time signatures, and key signatures. Applied theoretical knowledge of scales, intervals, chords, and cadences to musical analysis and composition. Developed the ability to identify musical terms, symbols, and structures essential for performance and score interpretation, laying a solid foundation for advanced music theory and practical musicianship.",
  },
  {
    id: 2,
    title: "Grade 3 PIANO",
    organization: "The Associated Board of the Royal Schools of Music",
    period: "2015",
    icon: <Trophy className="h-10 w-10 text-primary/70" />,
    image: excert2,
    description: "Recognized for outstanding musical performance in Grade 3 Piano, achieving Distinction under the Associated Board of the Royal Schools of Music (ABRSM). Demonstrated advanced proficiency in sight-reading, hand coordination, rhythmic precision, tempo control, and dynamic range. Delivered expressive interpretations of musical pieces through articulation, phrasing, and stylistic accuracy. Developed technical skills in scales, arpeggios, and finger positioning, laying a strong foundation for higher-level piano repertoire and performance excellence.",
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
