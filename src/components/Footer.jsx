import { Mail, Linkedin, Github } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:sivayogancharan612@gmail.com',
    display: 'sivayogancharan612@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sivayogan-charan-307436411/',
    display: 'linkedin.com/in/sivayogan-charan',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/sivayogancharan612-oss',
    display: 'github.com/sivayogancharan612-oss',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="px-8 md:px-16 py-16">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        Get in Touch
      </h2>
      <p className="text-slate-500 mb-10 max-w-lg">
        Feel free to reach out — I'm always open to discussing new opportunities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
              <s.icon className="text-amber-500" size={20} />
            </div>
            <div>
              <p className="font-medium text-slate-800 text-sm">{s.label}</p>
              <p className="text-slate-400 text-xs">{s.display}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Charan. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
