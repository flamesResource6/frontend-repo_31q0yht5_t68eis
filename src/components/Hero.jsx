import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (ref1.current) ref1.current.style.transform = `translateY(${y * 0.2}px)`
      if (ref2.current) ref2.current.style.transform = `translateY(${y * 0.1}px)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-rose-50" />
      <div className="absolute inset-0" aria-hidden>
        <div ref={ref2} className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div ref={ref1} className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-rose-200/40 blur-3xl" />
      </div>
      <div className="relative px-6 text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-indigo-600">Author • Entrepreneur</p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Words that inspire. Ventures that thrive.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I write books that spark ideas and build businesses that turn ideas into reality.
        </p>
        <div className="mt-8 flex items-center gap-3 justify-center">
          <a href="#blog" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">Read the blog</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-gray-200 hover:bg-white transition">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
