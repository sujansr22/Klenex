import { useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzYzxCjxquzGrVKKkZQfq8Zno9nySfgqm0QTeX82Zgl6YD53y-OkDB5ULc_TiN5m6JVDw/exec'

const initialForm = { name: '', phone: '', email: '', location: '', service: '', duration: '', requirements: '' }

export default function EnquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (event) => {
    setError('')
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submit = async (event) => {
    event.preventDefault()
    const trimmedForm = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]))
    const phoneIsValid = /^[+()\d\s-]{7,}$/.test(trimmedForm.phone)

    if (!phoneIsValid) {
      setError('Please enter a valid phone number.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: JSON.stringify(trimmedForm),
      })

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

      setForm(initialForm)
      setSubmitted(true)
    } catch (submissionError) {
      console.error('KLENEX consultation request failed', submissionError)
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" aria-label="Close consultation form" onClick={onClose}>×</button>
        {submitted ? (
          <div className="modal-success"><span className="success-mark">✓</span><p className="eyebrow">REQUEST RECEIVED</p><h2>Thank you.</h2><p>Thank you. Your consultation request has been received. We&apos;ll be in touch shortly.</p><button className="button button--dark" onClick={onClose}>Done <span>↗</span></button></div>
        ) : (
          <>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2 id="modal-title">Let&apos;s care for your home.</h2>
            <p className="modal-intro">Tell us a little about what you need and we&apos;ll help shape the right package.</p>
            <form onSubmit={submit}>
              <div className="form-grid">
                <label>Name<input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label>
                <label>Phone<input required name="phone" value={form.phone} onChange={update} placeholder="Your phone number" /></label>
                <label>Email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
                <label>Location<input required name="location" value={form.location} onChange={update} placeholder="Your area" /></label>
                <label>Service<select required name="service" value={form.service} onChange={update}><option value="">Select service</option><option value="Basic">Basic</option><option value="Prime">Prime</option></select></label>
                <label>Duration<select required name="duration" value={form.duration} onChange={update}><option value="">Select duration</option><option value="1 Month">1 Month</option><option value="3 Months">3 Months</option><option value="6 Months">6 Months</option><option value="12 Months">12 Months</option></select></label>
              </div>
              <label>Additional requirements<textarea name="requirements" value={form.requirements} onChange={update} placeholder="Tell us anything useful about your home or schedule" rows="3" /></label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button button--peach" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Request consultation'} {!isSubmitting && <span>↗</span>}</button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
