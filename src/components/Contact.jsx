import { useState } from 'react';
import { profile } from '../content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }
  return <section id="contact" aria-label="Contact" className="pt-16 pb-[60px] desktop:pt-[105px]">
    <p className="mb-3 font-mono text-xs text-accent">get in touch</p>
    <h2 className="text-[32px] leading-tight font-semibold">Contact</h2>
    <div className="mt-12 grid gap-9 desktop:grid-cols-[1fr_1.08fr] desktop:gap-20">
      <p className="max-w-[310px] leading-[1.65] text-muted desktop:pt-4">Have a project, opportunity, or question in mind? I'd love to hear from you — feel free to reach out here, or email me directly at <a className="text-link text-ink" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
      <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-white p-6 sm:p-8">
        <div className="space-y-5">
          <label className="block text-xs text-muted" htmlFor="name">Name<input className="field mt-2" id="name" name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label className="block text-xs text-muted" htmlFor="email">Email<input className="field mt-2" id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required /></label>
          <label className="block text-xs text-muted" htmlFor="message">Message<textarea className="field mt-2 min-h-[110px] resize-y" id="message" name="message" placeholder="What's on your mind?" required /></label>
        </div>
        <button type="submit" className="mt-5 min-h-11 w-full rounded-xs bg-accent px-4 py-3 text-sm text-white transition-colors hover:bg-accent-dark">Send message</button>
        <p className="mt-3 text-xs leading-5 text-muted">Demo form — messages are not sent. Please use the email link to get in touch.</p>
        <p role="status" className="mt-2 text-sm text-muted">{submitted ? 'Thanks for trying the form! Nothing was sent; the fields have been reset.' : ''}</p>
      </form>
    </div>
  </section>;
}
