import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative px-8 md:px-16 pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 z-10">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Backend-Focused Software Developer
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Hello, my name<br />is <span className="text-slate-900">Charan</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed">
            First-year Diploma student at NIBM specializing in robust desktop and web solutions.
            Actively seeking a 100% remote online trainee software engineering role engineered
            to clear backend tickets and build scalable logic efficiently.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-400/30"
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/sivayogan-charan-307436411/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 hover:border-amber-400 text-slate-700 font-semibold px-7 py-3 rounded-full transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right visual — organic blob with profile image */}
        <div className="flex-1 relative flex justify-center items-center min-h-[460px]">
          {/* Yellow blob background — larger, sits behind */}
          <div className="absolute w-[460px] h-[460px] bg-amber-400 rounded-[60%_40%_55%_45%_/_55%_45%_55%_45%] animate-blob shadow-lg shadow-amber-400/20" />

          {/* Profile image — same blob shape, sits on top */}
          <div
            className="relative z-10 w-[380px] h-[380px] overflow-hidden rounded-[60%_40%_55%_45%_/_55%_45%_55%_45%] animate-blob shadow-2xl border-4 border-white/40"
          >
            <img
              src="/profile.jpg"
              alt="Charan - Backend Developer"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Decorative small dot */}
          <div className="absolute bottom-8 right-8 w-5 h-5 bg-white rounded-full z-20 shadow-md" />
        </div>
      </div>
    </section>
  )
}
