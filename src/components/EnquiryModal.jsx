import { useState } from 'react'

export default function EnquiryModal({ selection, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', requirements: '' })

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    console.log('KLENEX consultation request', { ...form, ...selection })
    setSubmitted(true)
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" aria-label="Close consultation form" onClick={onClose}>×</button>
        {submitted ? (
          <div className="modal-success"><span className="success-mark">✓</span><p className="eyebrow">REQUEST RECEIVED</p><h2>Thank you.</h2><p>Your consultation request is with the KLENEX team. We will be in touch with the right next step.</p><button className="button button--dark" onClick={onClose}>Done <span>↗</span></button></div>
        ) : (
          <>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2 id="modal-title">Let&apos;s care for your home.</h2>
            <p className="modal-intro">Tell us a little about what you need and we&apos;ll help shape the right package.</p>
            <div className="selection-chip"><span>{selection.service}</span><strong>{selection.duration}</strong></div>
            <form onSubmit={submit}>
              <div className="form-grid">
                <label>Name<input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label>
                <label>Phone<input required name="phone" value={form.phone} onChange={update} placeholder="Your phone number" /></label>
                <label>Email<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
                <label>Location<input name="location" value={form.location} onChange={update} placeholder="Your area" /></label>
              </div>
              <label>Additional requirements<textarea name="requirements" value={form.requirements} onChange={update} placeholder="Tell us anything useful about your home or schedule" rows="3" /></label>
              <button className="button button--peach" type="submit">Request consultation <span>↗</span></button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}
