import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = ({ currentLanguage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [githubStats, setGithubStats] = useState({
    contributions: 1247,
    repositories: 42,
    followers: 156
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: currentLanguage === 'en' ? 'CTO, TechStart Inc.' : 'CTO, TechStart Inc.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: currentLanguage === 'en'
        ? 'Working with this developer was exceptional. They delivered a complex e-commerce platform that exceeded our expectations in both functionality and user experience. The attention to detail and technical expertise is remarkable.'
        : 'Travailler avec ce développeur était exceptionnel. Ils ont livré une plateforme e-commerce complexe qui a dépassé nos attentes tant en fonctionnalité qu\'en expérience utilisateur. L\'attention aux détails et l\'expertise technique est remarquable.',
      rating: 5,
      project: currentLanguage === 'en' ? 'E-Commerce Platform' : 'Plateforme E-Commerce'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: currentLanguage === 'en' ? 'Lead Designer, Creative Studio' : 'Designer Principal, Studio Créatif',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: currentLanguage === 'en'
        ? 'The collaboration was seamless. They understood our design vision perfectly and translated it into flawless code. The final product performs beautifully across all devices and browsers.'
        : 'La collaboration était transparente. Ils ont parfaitement compris notre vision de design et l\'ont traduite en code impeccable. Le produit final fonctionne magnifiquement sur tous les appareils et navigateurs.',
      rating: 5,
      project: currentLanguage === 'en' ? 'Creative Portfolio' : 'Portfolio Créatif'
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      role: currentLanguage === 'en' ? 'Medical Director, HealthTech Solutions' : 'Directrice Médicale, Solutions HealthTech',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: currentLanguage === 'en'
        ? 'The healthcare dashboard they built has transformed how we manage patient data. The intuitive interface and robust functionality have improved our workflow efficiency by 40%. Highly recommended!'
        : 'Le tableau de bord de santé qu\'ils ont construit a transformé la façon dont nous gérons les données patients. L\'interface intuitive et la fonctionnalité robuste ont amélioré l\'efficacité de notre flux de travail de 40%. Hautement recommandé!',
      rating: 5,
      project: currentLanguage === 'en' ? 'Healthcare Dashboard' : 'Tableau de Bord Santé'
    }
  ];

  const achievements = [
    {
      icon: 'Award',
      title: currentLanguage === 'en' ? 'Best Developer Award' : 'Prix du Meilleur Développeur',
      organization: 'Tech Excellence 2023',
      description: currentLanguage === 'en' 
        ? 'Recognized for outstanding contribution to web development'
        : 'Reconnu pour sa contribution exceptionnelle au développement web'
    },
    {
      icon: 'Users',
      title: currentLanguage === 'en' ? 'Community Leader' : 'Leader Communautaire',
      organization: 'React Developers Group',
      description: currentLanguage === 'en'
        ? 'Active mentor and speaker in the developer community'
        : 'Mentor actif et conférencier dans la communauté des développeurs'
    },
    {
      icon: 'BookOpen',
      title: currentLanguage === 'en' ? 'Technical Writer' : 'Rédacteur Technique',
      organization: 'Dev.to & Medium',
      description: currentLanguage === 'en'
        ? 'Published 25+ articles on modern web development'
        : 'Publié 25+ articles sur le développement web moderne'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#f59e0b" : "#e5e7eb"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
          {currentLanguage === 'en' ? 'Trusted by Industry Leaders' : 'Approuvé par les Leaders de l\'Industrie'}
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          {currentLanguage === 'en'
            ? 'Building lasting relationships through exceptional work and collaborative partnerships'
            : 'Construire des relations durables grâce à un travail exceptionnel et des partenariats collaboratifs'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Client Testimonials */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary mb-6">
            {currentLanguage === 'en' ? 'Client Testimonials' : 'Témoignages Clients'}
          </h3>
          
          <div className="relative bg-white rounded-2xl shadow-subtle border border-secondary-200 p-8 min-h-80">
            <div className="absolute top-6 left-6">
              <Icon name="Quote" size={32} color="var(--color-accent)" className="opacity-20" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-text-secondary text-sm">{testimonials[currentTestimonial].role}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-text-secondary text-lg leading-relaxed mb-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent font-medium">
                  {currentLanguage === 'en' ? 'Project:' : 'Projet:'} {testimonials[currentTestimonial].project}
                </span>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-accent' : 'bg-secondary-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contributions & Stats */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary mb-6">
            {currentLanguage === 'en' ? 'Open Source Contributions' : 'Contributions Open Source'}
          </h3>
          
          {/* GitHub Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-subtle border border-secondary-200 p-4 text-center">
              <div className="text-2xl font-bold text-success">{githubStats.contributions}</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'en' ? 'Contributions' : 'Contributions'}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-subtle border border-secondary-200 p-4 text-center">
              <div className="text-2xl font-bold text-accent">{githubStats.repositories}</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'en' ? 'Repositories' : 'Dépôts'}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-subtle border border-secondary-200 p-4 text-center">
              <div className="text-2xl font-bold text-cta">{githubStats.followers}</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'en' ? 'Followers' : 'Abonnés'}
              </div>
            </div>
          </div>

          {/* GitHub Contribution Graph Mockup */}
          <div className="bg-white rounded-lg shadow-subtle border border-secondary-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-text-primary">
                {currentLanguage === 'en' ? 'Contribution Activity' : 'Activité de Contribution'}
              </h4>
              <Icon name="Github" size={20} color="var(--color-text-secondary)" />
            </div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 84 }, (_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7 ? 'bg-success' :
                    Math.random() > 0.5 ? 'bg-success-300' :
                    Math.random() > 0.3 ? 'bg-success-200' :
                    'bg-secondary-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-text-secondary mt-2">
              {currentLanguage === 'en' ? 'Active contributor to open source projects' : 'Contributeur actif aux projets open source'}
            </p>
          </div>
        </div>
      </div>

      {/* Achievements & Recognition */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
          {currentLanguage === 'en' ? 'Recognition & Achievements' : 'Reconnaissance et Réalisations'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-subtle border border-secondary-200 p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-cta rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement.icon} size={24} color="white" strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">{achievement.title}</h4>
              <p className="text-accent text-sm font-medium mb-2">{achievement.organization}</p>
              <p className="text-text-secondary text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-text-secondary text-sm">
              {currentLanguage === 'en' ? 'Projects Completed' : 'Projets Terminés'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-text-secondary text-sm">
              {currentLanguage === 'en' ? 'Client Satisfaction' : 'Satisfaction Client'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-text-secondary text-sm">
              {currentLanguage === 'en' ? 'Years Experience' : 'Années d\'Expérience'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-text-secondary text-sm">
              {currentLanguage === 'en' ? 'Response Time' : 'Temps de Réponse'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;