import { ExternalLink, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Enterprise Student Management System',
    stack: ['C# 12', '.NET 8.0', 'WPF', 'Repository Pattern'],
    features: [
      'Built using the Repository Pattern to cleanly decouple data access layers from business logic.',
      'Designed an integrated custom Audit Engine to track and secure academic and financial transaction records.',
      'Engineered modular systems handling core administrative workflows, data validation, and persistent storage.',
    ],
  },
  {
    title: 'High-Performance File-Based Processing Engine',
    stack: ['Java', 'Algorithms', 'Data Processing'],
    features: [
      'Implemented an algorithmic data processor designed to read raw numerical datasets directly from flat text files.',
      'Engineered processing logic to efficiently compute complex mathematical averages and parse structural data patterns.',
    ],
  },
  {
    title: 'Full-Stack Hotel Web Application',
    stack: ['React', 'CSS', 'SQL'],
    features: [
      'Prototyped a responsive front-end user experience focusing on booking logic UI layout.',
      'Implemented strict frontend and data structure considerations for PII protection and secure booking state handling.',
    ],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-5 md:px-16 py-10 md:py-16">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
        Featured Projects
      </h2>
      <p className="text-slate-500 mb-6 md:mb-10 max-w-lg text-sm md:text-base">
        Case studies that demonstrate structural thinking and engineering discipline.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center">
                <Folder className="text-amber-500" size={20} />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-amber-400/10 text-amber-600 px-2.5 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="flex-1 space-y-2 mb-4">
              {project.features.map((feat, i) => (
                <li key={i} className="text-slate-500 text-sm leading-relaxed flex gap-2">
                  <span className="text-amber-400 mt-1 shrink-0">•</span>
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-600 transition-colors mt-auto"
            >
              View Project <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
