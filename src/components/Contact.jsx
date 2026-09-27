import { useState } from 'react';
import { profile } from '../content';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setError('');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const messages = Array.isArray(result.errors)
          ? result.errors.map(item => item.message).filter(Boolean).join(' ')
          : '';
        throw new Error(messages || 'Your message could not be sent. Please try again or email me directly.');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setError(error instanceof TypeError
        ? 'Could not connect. Please check your connection and try again, or email me directly.'
        : error.message);
      setStatus('error');
    }
  }
  return <section id="contact" aria-label="Contact" className="pt-16 pb-[60px] desktop:pt-[105px]">
    <p className="mb-3 font-mono text-xs text-accent">get in touch</p>
    <h2 className="text-[32px] leading-tight font-semibold">Contact</h2>
    <div className="mt-12 grid gap-9 desktop:grid-cols-[1fr_1.08fr] desktop:gap-20">
      <p className="max-w-[310px] leading-[1.65] text-muted desktop:pt-4">Have a project, opportunity, or question in mind? I'd love to hear from you, feel free to reach out here, or email me directly at <a className="text-link text-ink" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
      <form action="https://formspree.io/f/mgavnqqw" method="POST" onSubmit={handleSubmit} aria-busy={status === 'sending'} className="rounded-lg border border-line bg-white p-6 sm:p-8">
        <fieldset disabled={status === 'sending'} className="space-y-5">
          <label className="block text-xs text-muted" htmlFor="name">Name<input className="field mt-2" id="name" name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label className="block text-xs text-muted" htmlFor="email">Email<input className="field mt-2" id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required /></label>
          <label className="block text-xs text-muted" htmlFor="message">Message<textarea className="field mt-2 min-h-[110px] resize-y" id="message" name="message" placeholder="What's on your mind?" required /></label>
        </fieldset>
        <button type="submit" disabled={status === 'sending'} className="mt-5 min-h-11 w-full rounded-xs bg-accent px-4 py-3 text-sm text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        <p role="status" className="mt-2 text-sm text-muted">{status === 'success' ? 'Thanks! Your message was submitted successfully.' : status === 'sending' ? 'Sending your message…' : ''}</p>
        <p role="alert" className="mt-2 text-sm text-muted">{error}</p>
      </form>
    </div>
  </section>;
}
