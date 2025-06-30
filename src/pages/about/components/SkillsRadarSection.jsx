import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import { useLanguage } from '../../../components/LanguageContext';

const SkillsRadarSection = () => {
  const { currentLanguage } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [radarData, setRadarData] = useState([]);

  const content = {
    fr: {
      title: "Radar de Compétences Techniques",
      subtitle: "Un aperçu interactif de mon expertise technique. Cliquez sur une catégorie pour voir le détail.",
    },
    en: {
      title: "Technical Skills Radar",
      subtitle: "An interactive overview of my technical expertise. Click on a category to see the detail.",
    }
  };

  const skillsData = [
    {
      skill: "Gestion de Projet & Qualité",
      proficiency: 88,
      color: "#f59e0b",
      icon: "ClipboardCheck",
      technologies: [
        { name: "Agile/Scrum", proficiency: 95 },
        { name: "Cycle en V", proficiency: 80 },
        { name: "Tests", proficiency: 90 },
        { name: "Jira", proficiency: 85 },
        { name: "Automatisation", proficiency: 90 },
        { name: "Documentation", proficiency: 88 }
      ],
      description: {
        en: "Strong ability to lead projects and ensure software quality.",
        fr: "Forte capacité à mener des projets et à garantir la qualité logicielle."
      }
    },
    {
      skill: "Backend",
      proficiency: 90,
      color: "#10b981",
      icon: "Server",
      technologies: [
        { name: "Java (Spring)", proficiency: 92 },
        { name: "Node.js", proficiency: 80 },
        { name: "Python", proficiency: 88 },
        { name: "C#", proficiency: 75 },
        { name: "C", proficiency: 80 },
        { name: "PHP", proficiency: 75 },
      ],
      description: {
        en: "Extensive experience in building robust and scalable server-side applications.",
        fr: "Vaste expérience dans la création d'applications côté serveur robustes et évolutives."
      }
    },
    {
      skill: "Frontend",
      proficiency: 80,
      color: "#3b82f6",
      icon: "Monitor",
      technologies: [
        { name: "React", proficiency: 85 },
        { name: "JavaFX", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 95 }
      ],
      description: {
        en: "Passionate about creating intuitive and dynamic user interfaces.",
        fr: "Passionné par la création d'interfaces utilisateur intuitives et dynamiques."
      }
    },
    {
      skill: "Bases de Données & Outils",
      proficiency: 85,
      color: "#8b5cf6",
      icon: "Database",
      technologies: [
        { name: "SQL", proficiency: 90 },
        { name: "Git/GitHub", proficiency: 95 },
        { name: "CI/CD", proficiency: 85 },
        { name: "Docker", proficiency: 70 }
      ],
      description: {
        en: "Proficient with database management and modern development tools.",
        fr: "Maîtrise de la gestion de bases de données et des outils de développement modernes."
      }
    },
    {
      skill: "Fonctionnel & IA",
      proficiency: 80,
      color: "#ef4444",
      icon: "BrainCircuit",
      technologies: [
        { name: "Analyse", proficiency: 85 },
        { name: "Spécifications", proficiency: 88 },
        { name: "Communication", proficiency: 95 },
        { name: "Concepts IA", proficiency: 75 }
      ],
      description: {
        en: "Bridging the gap between business needs and technical solutions, with a touch of AI.",
        fr: "Faire le lien entre les besoins métiers et les solutions techniques, avec une touche d'IA."
      }
    }
  ];

  const mainSkillsData = skillsData.map(item => ({
    skill: item.skill,
    proficiency: item.proficiency
  }));

  useEffect(() => {
    // Animate the radar chart data on mount
    const timer = setTimeout(() => {
      setRadarData(mainSkillsData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skill) => {
    const isAlreadySelected = selectedSkill?.skill === skill.skill;
    setSelectedSkill(isAlreadySelected ? null : skill);

    if (isAlreadySelected) {
      setRadarData(mainSkillsData);
    } else {
      setRadarData(skill.technologies.map(t => ({ skill: t.name, proficiency: t.proficiency })));
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {content[currentLanguage].title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {content[currentLanguage].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-surface rounded-2xl p-4 sm:p-8 shadow-subtle">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart 
                  data={radarData}
                  key={selectedSkill ? selectedSkill.skill : 'main'}
                >
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    className="text-xs break-words"
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fontSize: 10, fill: '#9ca3af' }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="proficiency"
                    stroke={selectedSkill ? selectedSkill.color : "#3b82f6"}
                    fill={selectedSkill ? selectedSkill.color : "#3b82f6"}
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all duration-300 rounded-xl ${
                  selectedSkill?.skill === skill.skill 
                    ? 'scale-102 shadow-elevated' 
                    : 'hover:scale-101 hover:shadow-subtle'
                }`}
                onClick={() => handleSkillClick(skill)}
              >
                <div className="bg-surface rounded-xl p-6 border-l-4" style={{ borderColor: skill.color }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <Icon name={skill.icon} size={20} color={skill.color} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{skill.skill}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.technologies.map(tech => (
                            <span key={tech.name} className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Icon 
                      name={selectedSkill?.skill === skill.skill ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-text-secondary flex-shrink-0 ml-4"
                    />
                  </div>

                  {selectedSkill?.skill === skill.skill && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 text-sm text-text-secondary"
                    >
                      {skill.description[currentLanguage]}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadarSection;