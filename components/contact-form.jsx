'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitInquiry } from '../app/contact/actions'

const initialState = { status: 'idle', errors: {}, values: {} }

const projectTypes = [
  'Retail Fixture Installation',
  'Graphics & Vinyl',
  'National Rollout',
  'Experiential Environment',
  'Other',
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="font-heading w-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Sending...' : 'Send Inquiry'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitInquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="border border-border bg-surface p-10 text-center">
        <h3 className="font-heading text-3xl font-bold uppercase tracking-tight">
          Inquiry Received.
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Thanks for reaching out. Our team will review your project details and
          get back to you shortly.
        </p>
      </div>
    )
  }

  const v = state.values || {}

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" defaultValue={v.name} error={state.errors?.name} required />
        <Field
          label="Email"
          name="email"
          type="email"
          defaultValue={v.email}
          error={state.errors?.email}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" defaultValue={v.company} />
        <div>
          <label
            htmlFor="projectType"
            className="font-heading block text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={v.projectType || ''}
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-foreground"
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-heading block text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={v.message}
          className="mt-2 w-full resize-y border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-foreground"
          placeholder="Tell us about scope, locations, timeline, and what you need executed."
        />
        {state.errors?.message && (
          <p className="mt-2 text-sm text-primary">{state.errors.message}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  )
}

function Field({ label, name, type = 'text', defaultValue, error, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-heading block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-foreground"
      />
      {error && <p className="mt-2 text-sm text-primary">{error}</p>}
    </div>
  )
}
