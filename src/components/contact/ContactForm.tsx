import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from '../../config/site';
import { SERVICES } from '../../data/services';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const { serviceId, templateId, publicKey } = SITE_CONFIG.emailjs;
      if (!serviceId || !templateId || !publicKey) {
        setStatus('error');
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_phone: form.phone,
          from_email: form.email,
          service: form.service || 'Not specified',
          message: form.message,
        },
        publicKey,
      );

      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 text-white text-sm
                     placeholder-gray-600 transition-colors duration-300
                     focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 text-white text-sm
                     placeholder-gray-600 transition-colors duration-300
                     focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 text-white text-sm
                   placeholder-gray-600 transition-colors duration-300
                   focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
      />

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 text-white text-sm
                   transition-colors duration-300 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
      >
        <option value="">Select a service</option>
        {SERVICES.map((s) => (
          <option key={s.id} value={s.title}>{s.title}</option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-dark-800 border border-dark-600/50 text-white text-sm resize-none
                   placeholder-gray-600 transition-colors duration-300
                   focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20"
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold-outlined w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={16} />
            Send Message
          </span>
        )}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-sm text-center">Message sent successfully! We&apos;ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Failed to send. Please try emailing us directly or configure EmailJS keys.
        </p>
      )}
    </form>
  );
}
