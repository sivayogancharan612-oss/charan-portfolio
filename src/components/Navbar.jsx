import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contacts', href: '#contact' },
  ]

  return (
    <nav className="flex items-center justify-between px-5 md:px-16 py-4 md:py-6">
      <a href="#" className="text-slate-900 font-semibold text-lg tracking-tight">
        Charan
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-600 hover:text-amber-500 transition-colors font-medium text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 md:hidden z-50">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-amber-500 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
