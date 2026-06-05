export default function HeroSection() {
  return (
    <section className="relative px-5 md:px-16 pt-6 pb-10 md:pt-12 md:pb-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left content */}
        <div className="flex-1 z-10 text-center md:text-left">
          <span className="text-amber-500 font-semibold text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
            Backend-Focused Software Developer
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
            Hello, my name<br />is <span className="text-slate-900">Charan</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed mx-auto md:mx-0">
            First-year Diploma student at NIBM specializing in robust desktop and web solutions.
            Actively seeking a 100% remote online trainee software engineering role engineered
            to clear backend tickets and build scalable logic efficiently.
          </p>
          <div className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-400/30 text-sm md:text-base"
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/sivayogan-charan-307436411/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 hover:border-amber-400 text-slate-700 font-semibold px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all text-sm md:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right visual — organic blob with profile image */}
        <div className="flex-1 relative flex justify-center items-center min-h-[260px] md:min-h-[460px]">
          {/* Yellow blob background — centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[460px] md:h-[460px] bg-amber-400 rounded-[60%_40%_55%_45%_/_55%_45%_55%_45%] animate-blob shadow-lg shadow-amber-400/20" />

          {/* Profile image — centered */}
          <div className="relative z-10 w-[220px] h-[220px] md:w-[380px] md:h-[380px] overflow-hidden rounded-[60%_40%_55%_45%_/_55%_45%_55%_45%] animate-blob shadow-2xl border-4 border-white/40">
            <img
              src="/profile.jpg"
              alt="Charan - Backend Developer"
              className="w-full h-full object-cover object-[30%_center] scale-110 hover:scale-115 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
