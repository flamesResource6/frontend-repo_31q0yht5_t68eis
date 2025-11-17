import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus(data?.detail || 'Something went wrong.')
      }
    } catch (e) {
      setStatus('Network error, please try again.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-600">Have a speaking invitation, a partnership idea, or a note about a book? Send a message.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input type="email" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Email address" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          </div>
          <input className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} required />
          <textarea rows="5" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition" type="submit">Send message</button>
            {status && <span className="text-sm text-gray-600">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
