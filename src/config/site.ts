export const SITE_CONFIG = {
  url: 'https://new-house-decoration.vercel.app',
  defaultTitle: 'New House Decoration — Premium Interior Finishing',
  defaultDescription:
    'Premium interior finishing, decoration, and construction services. Where Quality Meets Design.',
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  },
} as const;
