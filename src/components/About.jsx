export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900">About</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a writer and businessman passionate about turning ideas into impact. My books explore
            clarity, strategy, and growth. My ventures focus on building useful products, systems,
            and teams that last.
          </p>
          <p className="mt-4 text-gray-600">
            Here you'll find essays on craft and commerce, updates from current projects, and ways
            we can collaborate.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-indigo-100 via-white to-rose-100 border border-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-indigo-500/60 text-xl">Your portrait here</div>
          </div>
        </div>
      </div>
    </section>
  )
}
