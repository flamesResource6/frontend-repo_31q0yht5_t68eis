import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blogs?limit=6`)
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Latest posts</h2>
          <a className="text-indigo-600 hover:text-indigo-700" href="#">View all</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <div className="text-gray-500">Loading...</div>}
          {!loading && posts.length === 0 && (
            <div className="col-span-full text-gray-500">No posts yet. Add some via the API.</div>
          )}
          {posts.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur hover:shadow-md transition overflow-hidden">
              {p.cover_image && (
                <img src={p.cover_image} alt="" className="w-full h-44 object-cover" />
              )}
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-indigo-600">{(p.tags||[]).join(' • ')}</div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-700">{p.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{p.excerpt || (p.content||'').slice(0,140)+"..."}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
