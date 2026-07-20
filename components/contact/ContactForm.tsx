"use client";
import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const fieldClass = (hasError: boolean) =>
  `w-full rounded-2xl border px-4 py-3.5 text-sm text-stone-100 transition duration-300 placeholder:text-stone-500 focus:outline-none ${
    hasError
      ? 'border-red-500/70 bg-[#111111] shadow-[0_0_0_2px_rgba(248,113,113,0.12)]'
      : 'border-white/10 bg-[#111111] shadow-inner shadow-black/20 focus:border-[#c9a25c] focus:ring-2 focus:ring-[#c9a25c]/20'
  }`;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = 'Le nom est requis.';
    if (!values.email.trim()) nextErrors.email = 'L’email est requis.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Email invalide.';
    if (!values.subject.trim()) nextErrors.subject = 'Le sujet est requis.';
    if (!values.message.trim()) nextErrors.message = 'Un message est requis.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(form)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('success');
      setForm(initialState);
      setErrors({});
    } else {
      setStatus('error');
    }
  };

  const renderField = (
    label: string,
    name: keyof FormState,
    type: 'text' | 'email' | 'tel' = 'text',
    placeholder: string,
    icon: React.ReactNode,
  ) => {
    const isTextArea = name === 'message';
    const hasError = Boolean(errors[name]);

    return (
      <label className="block text-sm text-stone-300">
        <span className="mb-2 block font-serif text-[11px] uppercase tracking-[0.3em] text-stone-400">
          {label}
        </span>
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#121212] p-1 transition duration-300 focus-within:border-[#c9a25c] focus-within:ring-2 focus-within:ring-[#c9a25c]/20">
          <span className="mt-3 ml-2 text-[#c9a25c]">{icon}</span>
          {isTextArea ? (
            <textarea
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              rows={6}
              className={`${fieldClass(hasError)} min-h-[140px] resize-none border-0 bg-transparent p-3 shadow-none focus:ring-0`}
            />
          ) : (
            <input
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              type={type}
              required={name !== 'phone'}
              className={`${fieldClass(hasError)} border-0 bg-transparent p-3 shadow-none focus:ring-0`}
            />
          )}
        </div>
        {errors[name] && <span className="mt-2 block text-xs text-red-400">{errors[name]}</span>}
      </label>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-[28px] border border-[#c9a25c]/20 bg-[#161616] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {renderField('Nom', 'name', 'text', 'Votre nom', <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 1 1 14 0" /></svg>)}
        {renderField('Email', 'email', 'email', 'Votre email', <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M4 6h16v12H4z" /><path d="m4 8 8 6 8-6" /></svg>)}
        {renderField('Téléphone', 'phone', 'tel', 'Votre téléphone', <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M7 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2h3" /></svg>)}
        {renderField('Sujet', 'subject', 'text', 'Objet de votre demande', <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M5 7h14" /><path d="M5 12h8" /><path d="M5 17h6" /></svg>)}
      </div>

      <div className="mt-4">
        {renderField('Message', 'message', 'text', 'Votre message', <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]" aria-hidden="true"><path d="M6 5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2Z" /></svg>)}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-[#f2d092] via-[#c9a25c] to-[#b07d2d] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_12px_30px_rgba(201,162,92,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(201,162,92,0.42)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
      </button>

      <div className="mt-4 min-h-[24px]">
        {status === 'success' && (
          <p className="animate-[fadeIn_0.3s_ease-out] text-sm text-emerald-400">
            Message envoyé avec succès. Nous vous répondrons très bientôt.
          </p>
        )}
        {status === 'error' && (
          <p className="animate-[fadeIn_0.3s_ease-out] text-sm text-red-400">
            Merci de vérifier les champs avant d’envoyer votre message.
          </p>
        )}
      </div>
    </form>
  );
}
