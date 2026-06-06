import { Code, Layout, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Code,
    title: 'Languages & Frameworks',
    items: ['C# (.NET 8, WPF)', 'Java', 'React', 'SQL', 'CSS'],
  },
  {
    icon: Layout,
    title: 'Architecture & Patterns',
    items: ['Repository Pattern', 'File-Based Data Processing', 'Integrated Audit Log Engines'],
  },
  {
    icon: Wrench,
    title: 'Tools & Environments',
    items: ['Git', 'GitHub', 'Windows Environment (Lenovo LOQ)'],
  },
]

export default function TechStack() {
  return (
    <section className="px-5 md:px-16 py-10 md:py-16 bg-slate-50">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
        Core Tech Stack
      </h2>
      <p className="text-slate-500 mb-6 md:mb-10 max-w-lg text-sm md:text-base">
        Organized professionally to show you that I understand development environments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
          >
            <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4">
              <cat.icon className="text-amber-500" size={22} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
