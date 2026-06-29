'use server'

export async function submitInquiry(prevState, formData) {
  const name = (formData.get('name') || '').toString().trim()
  const email = (formData.get('email') || '').toString().trim()
  const company = (formData.get('company') || '').toString().trim()
  const projectType = (formData.get('projectType') || '').toString().trim()
  const message = (formData.get('message') || '').toString().trim()

  const errors = {}
  if (!name) errors.name = 'Please enter your name.'
  if (!email) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!message) errors.message = 'Tell us a bit about your project.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, values: { name, email, company, projectType, message } }
  }

  // No email/database integration is connected yet, so we log the inquiry
  // server-side. Connect Neon (or an email provider) to persist or route these.
  console.log('[v0] New project inquiry:', { name, email, company, projectType, message })

  return { status: 'success', errors: {}, values: {} }
}
