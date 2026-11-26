import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Clock, ExternalLink, MapPin, Send } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

interface ContactSectionProps {
  preselectedDestination?: string;
}

interface FormState {
  fullName: string;
  email: string;
  destination: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  destination?: string;
  message?: string;
}

export function ContactSection({ preselectedDestination }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    destination: preselectedDestination || '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedDestination) {
      setForm((prev) => ({
        ...prev,
        destination: preselectedDestination,
      }));
      setSubmittedData(null);
    }
  }, [preselectedDestination]);

  const indianDestinations = DESTINATIONS.filter((d) => d.scope === 'india');
  const internationalDestinations = DESTINATIONS.filter((d) => d.scope === 'international');

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.destination.trim()) {
      nextErrors.destination = 'Please select or enter a destination of interest.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message =
        'Please share a brief note about your travel dreams (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...form });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setForm({ fullName: '', email: '', destination: '', message: '' });
    setErrors({});
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#FFFFFF] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#4C7371]">
              Contact Us
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-[clamp(2rem,3.3vw,3rem)] leading-[1.15] font-semibold text-[#153247]"
            >
              Let&apos;s Plan Something Beautiful.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#303B40]/90">
              Have a destination in mind or simply looking for travel inspiration? Tell us what you
              are dreaming of, and let&apos;s start the conversation.
            </p>

            <div className="mt-8 space-y-3 border-t border-[#E9E1D5] pt-6 text-sm text-[#303B40]/85">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#4C7371]" aria-hidden="true" />
                <span>Based in India · Domestic &amp; International Travel</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#4C7371]" aria-hidden="true" />
                <span className="tabular-nums">Monday – Saturday · 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            {/* Trustworthy Official Travel Resources (Descriptive Outbound Links) */}
            <div className="mt-8 border-t border-[#E9E1D5] pt-6">
              <h3 className="font-serif text-base font-semibold text-[#153247]">
                Official Travel Advisories for Indian Travellers
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-[#303B40]/80 sm:text-sm">
                <li>
                  <a
                    href="https://www.incredibleindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#4C7371] underline decoration-[#E9E1D5] underline-offset-4 transition-colors hover:text-[#153247]"
                  >
                    <span>Official Incredible India Tourism Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mea.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#4C7371] underline decoration-[#E9E1D5] underline-offset-4 transition-colors hover:text-[#153247]"
                  >
                    <span>Ministry of External Affairs India — Travel Guidance</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-[#E9E1D5] bg-[#F8F6F0] p-8 sm:p-12">
              {submittedData ? (
                <div role="status" aria-live="polite" className="space-y-6 py-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#6B9A98]/25 text-[#153247]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#153247]">
                      Thank You, {submittedData.fullName}.
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#303B40]/85 sm:text-base">
                      Your enquiry form has been validated and previewed below. Note: this is a
                      demonstration website, so no message has been sent to an external server or
                      live inbox.
                    </p>
                  </div>

                  <div className="space-y-2 border-y border-[#E9E1D5] py-5 text-sm text-[#303B40]/85">
                    <p>
                      <span className="font-medium text-[#153247]">Email Address:</span>{' '}
                      {submittedData.email}
                    </p>
                    <p>
                      <span className="font-medium text-[#153247]">Destination of Interest:</span>{' '}
                      {submittedData.destination}
                    </p>
                    <p>
                      <span className="font-medium text-[#153247]">Message:</span>{' '}
                      {submittedData.message}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[44px] items-center rounded-sm bg-[#153247] px-6 py-3 text-sm font-medium text-[#FFFFFF] transition-colors duration-200 hover:bg-[#6B9A98] hover:text-[#153247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153247]"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="enquiry-full-name"
                      className="mb-2 block text-xs font-medium tracking-wider text-[#153247]"
                    >
                      Full Name
                    </label>
                    <input
                      id="enquiry-full-name"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, fullName: e.target.value }));
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'enquiry-full-name-error' : undefined}
                      className="w-full rounded-sm border border-[#E9E1D5] bg-[#FFFFFF] px-4 py-3 text-sm text-[#303B40] placeholder:text-[#303B40]/45 focus:border-[#6B9A98] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p
                        id="enquiry-full-name-error"
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#9B2C2C]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="mb-2 block text-xs font-medium tracking-wider text-[#153247]"
                    >
                      Email Address
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                      className="w-full rounded-sm border border-[#E9E1D5] bg-[#FFFFFF] px-4 py-3 text-sm text-[#303B40] placeholder:text-[#303B40]/45 focus:border-[#6B9A98] focus:outline-none"
                    />
                    {errors.email && (
                      <p
                        id="enquiry-email-error"
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#9B2C2C]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-destination"
                      className="mb-2 block text-xs font-medium tracking-wider text-[#153247]"
                    >
                      Destination of Interest
                    </label>
                    <select
                      id="enquiry-destination"
                      name="destination"
                      value={form.destination}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, destination: e.target.value }));
                        if (errors.destination) {
                          setErrors((prev) => ({ ...prev, destination: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.destination)}
                      aria-describedby={
                        errors.destination ? 'enquiry-destination-error' : undefined
                      }
                      className="w-full rounded-sm border border-[#E9E1D5] bg-[#FFFFFF] px-4 py-3 text-sm text-[#303B40] focus:border-[#6B9A98] focus:outline-none"
                    >
                      <option value="">Select a destination or inspiration theme</option>
                      <optgroup label="India">
                        {indianDestinations.map((dest) => (
                          <option key={dest.id} value={`${dest.name}, ${dest.country}`}>
                            {dest.name}, {dest.country}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="International">
                        {internationalDestinations.map((dest) => (
                          <option key={dest.id} value={`${dest.name}, ${dest.country}`}>
                            {dest.name}, {dest.country}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Open to Inspiration">Open to Inspiration</option>
                    </select>
                    {errors.destination && (
                      <p
                        id="enquiry-destination-error"
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#9B2C2C]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.destination}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="mb-2 block text-xs font-medium tracking-wider text-[#153247]"
                    >
                      Message
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Share your dream destination, approximate budget in ₹, or travel mood..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                      className="w-full resize-y rounded-sm border border-[#E9E1D5] bg-[#FFFFFF] px-4 py-3 text-sm text-[#303B40] placeholder:text-[#303B40]/45 focus:border-[#6B9A98] focus:outline-none"
                    />
                    {errors.message && (
                      <p
                        id="enquiry-message-error"
                        className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#9B2C2C]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] shrink-0 whitespace-nowrap items-center gap-2.5 rounded-sm bg-[#6B9A98] px-8 py-3.5 text-sm font-medium tracking-wide text-[#153247] transition-colors duration-200 hover:bg-[#153247] hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153247]"
                    >
                      <span>Send Enquiry</span>
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
