export default function Home() {
  const services = [
    {
      title: 'Retail Fixture Installation',
      desc: 'Nationwide fixture deployment, gondola systems, architectural millwork, and white-glove retail execution.',
    },
    {
      title: 'Graphics & Vinyl Installation',
      desc: 'SEG graphics, architectural vinyl, wall wraps, experiential branding, and premium finish applications.',
    },
    {
      title: 'National Rollouts',
      desc: 'Technology-driven multi-site deployments with real-time reporting and centralized project management.',
    },
    {
      title: 'Experiential Environments',
      desc: 'Retail activations, showroom environments, pop-ups, and branded consumer experiences.',
    },
  ]

  const differentiators = [
    'Real-Time Project Visibility',
    'White-Glove Execution Standards',
    'Dedicated Rollout PM Teams',
    'Certified National Installer Network',
    'Same-Day Closeout Reporting',
    'Luxury-Level Graphics Precision',
    'Rapid Deployment Capability',
    'Technology-Driven Operations',
  ]

  const stats = [
    { value: '48', label: 'State Coverage' },
    { value: '15 Min', label: 'PM Response Standard' },
    { value: '5,000+', label: 'Installations Completed' },
    { value: '24/7', label: 'Rollout Support' },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">RENEGADE RETAIL</h1>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Retail Environments & Rollouts
            </p>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide text-zinc-300">
            <a href="#services">Services</a>
            <a href="#technology">Technology</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300 mb-8">
              National Retail Execution Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
              Nationwide Retail Execution Without the Chaos.
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
              Premium fixture, graphics, and rollout installations powered by elite project management, real-time visibility, and white-glove field execution.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
                Schedule Consultation
              </button>

              <button className="border border-zinc-600 px-8 py-4 rounded-2xl font-semibold">
                View National Rollouts
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <div className="text-4xl font-black mb-3">{stat.value}</div>
                <div className="text-zinc-400 uppercase text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="uppercase text-zinc-500 tracking-[0.3em] text-sm mb-5">
              Why We're Different
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Built for Enterprise Retail Execution.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              We are not just installers. We are a technology-driven retail execution partner built to manage complex rollouts, premium environments, and high-visibility retail programs nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-3xl p-8"
              >
                <div className="text-2xl font-bold leading-snug">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="uppercase text-zinc-500 tracking-[0.3em] text-sm mb-5">
              Core Services
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Premium Retail Environment Execution.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10"
              >
                <div className="text-zinc-500 text-sm uppercase tracking-[0.25em] mb-5">
                  0{i + 1}
                </div>

                <h3 className="text-3xl font-bold mb-6 leading-tight">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-28 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="uppercase text-zinc-500 tracking-[0.3em] text-sm mb-5">
              Technology & Visibility
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Real-Time Visibility for Every Project.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Our systems provide live reporting, digital QC workflows, real-time field photo verification, freight tracking, and centralized rollout dashboards.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-6 text-zinc-600">
            Ready to Scale?
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Your Retail Environment Deserves Better Execution.
          </h2>

          <p className="text-xl text-zinc-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Whether you need nationwide rollout support, premium graphics installation, or white-glove fixture deployment, our team is built to execute high-visibility retail projects at scale.
          </p>
        </div>
      </section>
    </main>
  )
}
