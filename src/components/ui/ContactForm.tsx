import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormValues } from '@/lib/formSchema'
import { budgetOptions, contactInfo, serviceOptions } from '@/data/contact'
import { Button } from './Button'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: defaultService,
      budget: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading')
    try {
      const body = new FormData()
      body.append('name', data.name)
      body.append('email', data.email)
      body.append('phone', data.phone || '')
      body.append('service', data.service)
      body.append('budget', data.budget || '')
      body.append('message', data.message)
      body.append('_subject', `SocialGo — ${data.service} — ${data.name}`)
      body.append('_template', 'table')
      body.append('_captcha', 'false')

      const res = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) throw new Error('Submit failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-accent'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
            Nume *
          </label>
          <input id="name" className={fieldClass} autoComplete="name" {...register('name')} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
            Email *
          </label>
          <input id="email" type="email" className={fieldClass} autoComplete="email" {...register('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
            Telefon
          </label>
          <input id="phone" type="tel" className={fieldClass} autoComplete="tel" {...register('phone')} />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
            Serviciu *
          </label>
          <select id="service" className={cn(fieldClass, 'appearance-none')} {...register('service')}>
            <option value="">Selectează</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
          Buget estimat
        </label>
        <select id="budget" className={cn(fieldClass, 'appearance-none')} {...register('budget')}>
          {budgetOptions.map((opt) => (
            <option key={opt.value || 'none'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted">
          Detalii proiect *
        </label>
        <textarea id="message" rows={5} className={fieldClass} {...register('message')} />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" className="mt-1 accent-accent" {...register('consent')} />
        <span>
          Sunt de acord ca SocialGo să folosească datele din acest formular pentru a răspunde
          solicitării mele. Nu trimitem spam.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-red-400">{errors.consent.message}</p>}

      <Button type="submit" disabled={status === 'loading'} className="w-full md:w-auto">
        {status === 'loading' ? 'Se trimite…' : 'Trimite mesajul'}
      </Button>

      {status === 'success' && (
        <p className="rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent" role="status">
          Mesaj trimis. Îți răspundem cât de curând.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300" role="alert">
          Nu am putut trimite formularul. Scrie-ne direct la{' '}
          <a className="underline" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>{' '}
          sau sună la {contactInfo.phoneDisplay}.
        </p>
      )}
    </form>
  )
}
