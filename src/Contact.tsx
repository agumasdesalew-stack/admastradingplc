import { useState } from 'react'

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, message }),
      })

      if (!res.ok) throw new Error('Network error')

      setStatus('success')
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold mb-4">Contact & Feedback</h1>
      <p className="text-sm mb-6">Send us feedback or inquiries — we read every message.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="rounded-lg border px-3 py-2"
          />
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            className="rounded-lg border px-3 py-2"
          />
        </div>

        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-lg border px-3 py-2"
        />

        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full rounded-lg border px-3 py-2 h-32"
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-950"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <span className="text-emerald-600">Message sent — thanks!</span>}
          {status === 'error' && <span className="text-rose-600">Failed to send. Try again.</span>}
        </div>
      </form>
    </div>
  )
}
