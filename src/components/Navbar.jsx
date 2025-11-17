import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-gray-900">Your Name</a>
          <button onClick={()=>setOpen(o=>!o)} className="sm:hidden p-2 rounded-md border border-gray-200">☰</button>
          <ul className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            {links.map(l => (
              <li key={l.href}><a className="hover:text-gray-900" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        {open && (
          <div className="sm:hidden px-6 pb-4">
            <ul className="grid gap-2 text-gray-700">
              {links.map(l => (
                <li key={l.href}><a className="block py-2" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
