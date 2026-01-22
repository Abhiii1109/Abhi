import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Abhiii1109/repos",
          {
            headers: import.meta.env.VITE_GITHUB_TOKEN
              ? { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
              : {},
          }
        );

        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();

        const formattedProjects = data
          .filter((repo) => !repo.fork && repo.name !== "Abhiii1109")
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            category: repo.language || "Development",
            description: repo.description,
            tech: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || "Code"],
            link: repo.html_url,
            stars: repo.stargazers_count,
            updated: repo.updated_at,
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      
      // Fade in section title
      gsap.from('.section-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 80%',
        }
      });

      // Animate each project card
      projectsRef.current.forEach((card, index) => {
        if (!card) return;
        const overlay = card.querySelector('.project-overlay');

        // Card fade-in on scroll
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        });

        // Hover animation for overlay
        card.addEventListener('mouseenter', () => {
          if (overlay) {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          if (overlay) {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-24 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Header */}
        <div className="section-header mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
            Selected Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A collection of projects that showcase my expertise in web development and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
             <p className="text-white text-xl">Loading projects...</p>
          ) : (
            projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (projectsRef.current[index] = el)}
                className="project-card group relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-800 hover:border-zinc-700 overflow-hidden cursor-pointer transition-all duration-500"
                style={{ minHeight: '400px' }}
              >
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-light text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 group-hover:bg-white transition-all duration-300 ml-4">
                      <span className="text-white group-hover:text-black transition-colors duration-300 text-xl">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
                    {project.description || "A project showcasing modern development practices and clean code architecture."}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-zinc-800 text-gray-300 border border-zinc-700 group-hover:bg-zinc-700 group-hover:border-zinc-600 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center gap-6 pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-500">{project.stars || 0}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-500">
                        {project.updated ? new Date(project.updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recent'}
                      </span>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="project-overlay absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
