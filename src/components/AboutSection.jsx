import { GraduationCap, BookOpen } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="px-5 md:px-16 py-10 md:py-16 bg-slate-50">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-10">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="text-amber-500" size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg">Education</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <p className="font-semibold text-slate-800">Diploma in Software Engineering</p>
            <p className="text-amber-500 font-medium text-sm mt-1">
              National Institute of Business Management (NIBM)
            </p>
            <p className="text-slate-500 text-sm mt-2">Current Status: First-Year Student</p>
          </div>
        </div>

        {/* Philosophy */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center">
              <BookOpen className="text-amber-500" size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg">Philosophy</h3>
          </div>
          <blockquote className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-l-4 border-l-amber-400">
            <p className="text-slate-600 leading-relaxed italic">
              "I focus on building clean, predictable backend architectures. Whether it's
              decoupling database layers using C# repository patterns or optimizing file
              parsing in Java, I aim to write highly maintainable code. I leverage modern AI
              workflows and developer ecosystems to fast-track my learning and deliver stable
              software solutions while managing a rigorous academic schedule."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
